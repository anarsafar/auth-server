"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const tokenBlacklistService_1 = __importDefault(require("../../service/tokens/tokenBlacklistService"));
const config_1 = require("../../config");
const logOut = async (req, res) => {
    var _a;
    try {
        const accessToken = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        const { refreshToken } = req.cookies;
        const decodedAccessToken = jsonwebtoken_1.default.verify(accessToken, config_1.config.jwtTokens.accessSecretKey);
        const decodedRefreshToken = jsonwebtoken_1.default.verify(refreshToken, config_1.config.jwtTokens.refreshSecretKey);
        await tokenBlacklistService_1.default.addToBlacklist(accessToken, decodedAccessToken.exp, 'access');
        await tokenBlacklistService_1.default.addToBlacklist(refreshToken, decodedRefreshToken.exp, 'refresh');
        res.clearCookie('refreshToken');
        res.json({ message: 'Logged out successfully' });
    }
    catch (error) {
        res.status(500).json({ error: `An error occurred: ${error}` });
    }
};
exports.default = logOut;
