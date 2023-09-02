"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resetPasswordService_1 = __importDefault(require("../../service/resetPasswordService"));
const resetPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;
    try {
        await (0, resetPasswordService_1.default)(token, password);
        return res.render('result', { resultHeader: 'Reset password result', resultMessage: 'Password reset successful' });
    }
    catch (error) {
        return res.render('result', { resultHeader: 'Reset password result', resultMessage: `An error occurred while resetting password: ${error}` });
    }
};
const showResetPage = (req, res) => {
    const { token } = req.params;
    res.render('reset-password', { token });
};
exports.default = { resetPassword, showResetPage };
