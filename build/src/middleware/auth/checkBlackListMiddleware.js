"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blacklistModel_1 = __importDefault(require("../../model/blacklistModel"));
const checkTokensMiddleware = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        const { refreshToken } = req.cookies;
        if (!authorization) {
            return res.status(401).json({ error: 'Access token is missing' });
        }
        if (!refreshToken) {
            return res.status(401).json({ error: 'Refresh token is missing' });
        }
        const accessToken = authorization.split(' ')[1];
        const blacklistedAccessToken = await blacklistModel_1.default.findOne({ token: accessToken });
        if (blacklistedAccessToken) {
            return res.status(401).json({ error: 'Access token is blacklisted' });
        }
        const blacklistedRefreshToken = await blacklistModel_1.default.findOne({ token: refreshToken });
        if (blacklistedRefreshToken) {
            return res.status(401).json({ error: 'Refresh token is blacklisted' });
        }
        next();
    }
    catch (error) {
        res.status(500).json({ error: 'invalid token' });
    }
};
exports.default = checkTokensMiddleware;
