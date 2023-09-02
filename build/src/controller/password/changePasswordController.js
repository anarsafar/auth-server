"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const userModel_1 = __importDefault(require("../../model/userModel"));
const changePassword = async (req, res) => {
    const { currentPassword, newPassword } = req.body;
    try {
        if (!req.user) {
            return res.status(401).json({ error: 'Access Denied: Unauthorized' });
        }
        const { userId } = req.user;
        const user = await userModel_1.default.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const isPasswordValid = await bcrypt_1.default.compare(currentPassword, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: 'Invalid current password' });
        }
        const hashedPassword = await bcrypt_1.default.hash(newPassword, 10);
        user.password = hashedPassword;
        await user.save();
        res.status(200).json({ message: 'Password updated successfully' });
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred while changing the password' });
    }
};
exports.default = changePassword;
