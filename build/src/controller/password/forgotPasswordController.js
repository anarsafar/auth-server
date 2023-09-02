"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const userModel_1 = __importDefault(require("../../model/userModel"));
const sendEmailService_1 = __importDefault(require("../../service/sendEmailService"));
const forgotPassword = async (req, res, next) => {
    const { email } = req.body;
    try {
        const user = await userModel_1.default.findOne({ email });
        if (user) {
            const resetToken = crypto_1.default.randomBytes(20).toString('hex');
            user.resetToken = resetToken;
            user.resetTokenExpiration = Date.now() + 3600000; // Token expires in 1 hour
            await user.save();
            await (0, sendEmailService_1.default)(user.email, resetToken, 'reset');
            return res.status(200).json({ message: 'check email for reset password' });
        }
        else {
            return res.status(200).json({ error: 'User does not exist' });
        }
    }
    catch (error) {
        return res.status(500).json({ error: 'An error occurred while requesting password reset' });
    }
};
exports.default = forgotPassword;
