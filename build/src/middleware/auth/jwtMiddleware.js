"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importStar(require("jsonwebtoken"));
const config_1 = require("../../config");
const authenticateToken = async (req, res, next) => {
    var _a;
    try {
        const { refreshToken } = req.cookies;
        const accessToken = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        const decodedAccessToken = jsonwebtoken_1.default.verify(accessToken, config_1.config.jwtTokens.accessSecretKey);
        const decodedRefreshToken = jsonwebtoken_1.default.verify(refreshToken, config_1.config.jwtTokens.refreshSecretKey);
        if (decodedAccessToken.userId !== decodedRefreshToken.userId) {
            return res.status(401).json({ error: 'User IDs in tokens do not match' });
        }
        const user = decodedAccessToken;
        req.user = user;
        next();
    }
    catch (error) {
        if (error instanceof jsonwebtoken_1.TokenExpiredError) {
            return res.status(401).json({ error: 'Token has expired' });
        }
        else if (error instanceof jsonwebtoken_1.JsonWebTokenError) {
            return res.status(401).json({ error: 'Invalid token' });
        }
        else {
            res.status(500).json({ error: 'An error occurred' });
        }
    }
};
exports.default = authenticateToken;
