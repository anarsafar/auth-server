"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const crypto_1 = __importDefault(require("crypto"));
const userModel_1 = __importDefault(require("../../model/userModel"));
const sendEmailService_1 = __importDefault(require("../../service/sendEmailService"));
async function updateUserAndSendConfirmationEmail(existingUser, password) {
    existingUser.password = await bcrypt_1.default.hash(password, 10);
    existingUser.confirmationToken = crypto_1.default.randomBytes(20).toString('hex');
    await userModel_1.default.updateOne({ email: existingUser.email }, existingUser);
    await (0, sendEmailService_1.default)(existingUser.email, existingUser.confirmationToken, 'confirm');
}
const signUp = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        let existingUser = await userModel_1.default.findOne({ email });
        if (existingUser && !(existingUser === null || existingUser === void 0 ? void 0 : existingUser.confirmed)) {
            await updateUserAndSendConfirmationEmail(existingUser, password);
            return res.status(200).json({ message: 'Check email inbox for new confirmation link' });
        }
        if (existingUser) {
            return res.status(409).json({ error: 'Email already exist' });
        }
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const confirmationToken = crypto_1.default.randomBytes(20).toString('hex');
        const user = new userModel_1.default({
            email,
            password: hashedPassword,
            name: '',
            phone: '',
            bio: '',
            image: '',
            confirmed: false,
            confirmationToken
        });
        await user.save();
        await (0, sendEmailService_1.default)(email, confirmationToken, 'confirm');
        res.status(200).json({ message: 'Check email inbox for confirmation link' });
    }
    catch (error) {
        res.status(500).json({ error: 'An error occured during sign up' });
    }
};
exports.default = signUp;
