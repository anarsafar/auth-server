"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const userModel_1 = __importDefault(require("../../model/userModel"));
const authUtils_1 = require("../../utils/authUtils");
const config_1 = require("../../config/");
const logIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel_1.default.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'User does not exist' });
        }
        if (user.googleId) {
            return res.status(401).json({ error: 'Try authenticate with google' });
        }
        const isPasswordValid = await bcrypt_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password credential' });
        }
        const accessToken = (0, authUtils_1.generateAccessToken)(user._id);
        const refreshToken = (0, authUtils_1.generateRefreshToken)(user._id);
        res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: config_1.config.nodeEnv === 'production', maxAge: 7 * 24 * 60 * 60 * 1000 }); // 7 days
        res.status(200).json({ accessToken });
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
};
exports.default = logIn;
