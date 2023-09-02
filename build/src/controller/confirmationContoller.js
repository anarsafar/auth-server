"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("../model/userModel"));
const confirmUser = async (req, res) => {
    const { token } = req.params;
    try {
        const user = await userModel_1.default.findOne({ confirmationToken: token });
        if (!user) {
            res.status(404).render('result', { resultHeader: 'User Confirmation Result', resultMessage: 'Invalid or expired token' });
        }
        else if (user.confirmed) {
            return res.status(409).render('result', { resultHeader: 'User Confirmation Result', resultMessage: 'Email already confirmed.' });
        }
        else {
            user.confirmed = true;
            await user.save();
            return res.status(201).render('result', { resultHeader: 'User Confirmation Result', resultMessage: 'Email confirmed successfully. You can now log in.' });
        }
    }
    catch (error) {
        return res.status(500).render('result', { resultHeader: 'User Confirmation Result', resultMessage: 'An error occurred during email confirmation' });
    }
};
exports.default = confirmUser;
