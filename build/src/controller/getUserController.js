"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("../model/userModel"));
const getUser = async (req, res, next) => {
    const { userId } = req.user;
    try {
        userModel_1.default.findById(userId)
            .select('-password')
            .select('-confirmationToken')
            .select('-confirmed')
            .select('-resetToken')
            .select('-resetTokenExpiration')
            .then((user) => (user ? res.status(200).json(user) : res.status(404).json({ message: 'user not found' })))
            .catch((error) => res.status(500).json({ error }));
    }
    catch (error) {
        res.status(500).json({ error: 'something went wrong' });
    }
};
exports.default = getUser;
