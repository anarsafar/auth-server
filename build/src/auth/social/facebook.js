"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const userModel_1 = __importDefault(require("../../model/userModel"));
const authUtils_1 = require("../../utils/authUtils");
const facebookAuth = (req, res) => {
    passport_1.default.authenticate('facebook', async (err, user, info) => {
        if (err) {
            return res.status(500).json({ error: 'An error occurred during authentication' });
        }
        if (!user) {
            return res.status(401).json({ error: 'Facebook authentication failed' });
        }
        try {
            const { id } = user;
            const userDB = await userModel_1.default.findOne({ facebookId: id });
            if (userDB) {
                (0, authUtils_1.authenticateUser)(userDB, res, 'facebook');
            }
            else {
                const newUser = new userModel_1.default({
                    password: '',
                    name: user.displayName,
                    phone: '',
                    bio: '',
                    image: '',
                    confirmed: true,
                    facebookId: user.id
                });
                await newUser.save();
                (0, authUtils_1.authenticateUser)(newUser, res, 'facebook');
            }
        }
        catch (error) {
            return res.status(500).json({ error: 'Something went wrong', message: error });
        }
    })(req, res);
};
exports.default = facebookAuth;
