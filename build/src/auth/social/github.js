"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const userModel_1 = __importDefault(require("../../model/userModel"));
const authUtils_1 = require("../../utils/authUtils");
const githubAuth = (req, res) => {
    passport_1.default.authenticate('github', { session: false }, async (err, user, info) => {
        var _a;
        if (err) {
            return res.status(500).json({ error: 'An error occurred during authentication' });
        }
        if (!user) {
            return res.status(401).json({ error: 'Github authentication failed' });
        }
        try {
            const { id } = user;
            const userDB = await userModel_1.default.findOne({ githubId: id });
            if (userDB) {
                (0, authUtils_1.authenticateUser)(userDB, res, 'github');
            }
            else {
                const newUser = new userModel_1.default({
                    password: '',
                    name: user.displayName,
                    phone: '',
                    bio: user._json.bio,
                    image: (_a = user.photos[0]) === null || _a === void 0 ? void 0 : _a.value,
                    confirmed: true,
                    githubId: user.id
                });
                await newUser.save();
                (0, authUtils_1.authenticateUser)(newUser, res, 'github');
            }
        }
        catch (error) {
            return res.status(500).json({ error: 'Something went wrong', message: error });
        }
    })(req, res);
};
exports.default = githubAuth;
