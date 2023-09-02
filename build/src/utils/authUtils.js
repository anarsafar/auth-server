"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateUser = exports.generateRefreshToken = exports.generateAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const generateAccessToken = (userId) => {
    const payload = { userId };
    return jsonwebtoken_1.default.sign(payload, config_1.config.jwtTokens.accessSecretKey, { algorithm: 'HS256', expiresIn: '5h' });
};
exports.generateAccessToken = generateAccessToken;
const generateRefreshToken = (userId) => {
    const payload = { userId };
    return jsonwebtoken_1.default.sign(payload, config_1.config.jwtTokens.refreshSecretKey, { algorithm: 'HS256', expiresIn: '7d' });
};
exports.generateRefreshToken = generateRefreshToken;
const authenticateUser = (user, res, service) => {
    const accessToken = (0, exports.generateAccessToken)(user._id);
    const refreshToken = (0, exports.generateRefreshToken)(user._id);
    res.cookie('refreshToken', refreshToken, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 }); // 7 days
    res.status(200).json({ accessToken, message: `successfully authenticated with ${service}` });
};
exports.authenticateUser = authenticateUser;
