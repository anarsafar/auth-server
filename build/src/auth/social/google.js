"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const userModel_1 = __importDefault(require("../../model/userModel"));
const authUtils_1 = require("../../utils/authUtils");
const googleAuth = (req, res) => {
    passport_1.default.authenticate('google', async (err, user, info) => {
        if (err) {
            return res.status(500).json({ error: 'An error occurred during authentication' });
        }
        if (!user) {
            return res.status(401).json({ error: 'Google authentication failed' });
        }
        try {
            const googleId = user.id;
            const userDB = await userModel_1.default.findOne({ googleId });
            if (userDB) {
                (0, authUtils_1.authenticateUser)(userDB, res, 'google');
            }
            else {
                const newUser = new userModel_1.default({
                    password: '',
                    name: user.displayName,
                    phone: '',
                    bio: '',
                    image: user.photos[0].value,
                    confirmed: true,
                    googleId: user.id
                });
                await newUser.save();
                (0, authUtils_1.authenticateUser)(newUser, res, 'google');
            }
        }
        catch (error) {
            return res.status(500).json({ error: 'Something went wrong' });
        }
    })(req, res);
};
exports.default = googleAuth;
