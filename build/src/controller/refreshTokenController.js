"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userModel_1 = __importDefault(require("../model/userModel"));
const tokenBlacklistService_1 = __importDefault(require("../service/tokens/tokenBlacklistService"));
const config_1 = require("../config");
const authUtils_1 = require("../utils/authUtils");
const blacklistModel_1 = __importDefault(require("../model/blacklistModel"));
const refreshToken = async (req, res) => {
    var _a;
    try {
        const { refreshToken } = req.cookies;
        if (!refreshToken) {
            return res.status(401).json({ error: 'Refresh token is missing' });
        }
        const blacklistedRefreshToken = await blacklistModel_1.default.findOne({ token: refreshToken });
        if (blacklistedRefreshToken) {
            return res.status(401).json({ error: 'Refresh token is blacklisted' });
        }
        const decodedRefreshToken = jsonwebtoken_1.default.verify(refreshToken, config_1.config.jwtTokens.refreshSecretKey, { algorithms: ['HS256'] });
        const user = await userModel_1.default.findById(decodedRefreshToken.userId);
        if (!user) {
            return res.status(401).json({ error: 'Invalid refresh token' });
        }
        const accessToken = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        console.log(accessToken, typeof accessToken);
        if (accessToken != 'null') {
            await tokenBlacklistService_1.default.addToBlacklist(accessToken, Date.now() / 1000, 'access');
        }
        const newAccessToken = (0, authUtils_1.generateAccessToken)(user._id);
        res.status(200).json({ accessToken: newAccessToken });
    }
    catch (error) {
        res.status(500).json({ error: `An error occurred ${JSON.stringify(error)}` });
    }
};
exports.default = { refreshToken };
