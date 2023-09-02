"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const userModel_1 = __importDefault(require("../model/userModel"));
const resetPasswordService = async (token, newPassword) => {
    const user = await userModel_1.default.findOne({ resetToken: token, resetTokenExpiration: { $gt: Date.now() } });
    if (user) {
        user.password = await bcrypt_1.default.hash(newPassword, 10);
        user.resetToken = null;
        user.resetTokenExpiration = null;
        await user.save();
    }
    else {
        throw new Error('Invalid or expired reset token');
    }
};
exports.default = resetPasswordService;
