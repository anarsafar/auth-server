"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ejs_1 = __importDefault(require("ejs"));
const path_1 = __importDefault(require("path"));
const index_1 = require("../config/index");
const nodemailerConfig_1 = __importDefault(require("../config/nodemailerConfig"));
async function sendEmail(email, confirmationToken, type) {
    let templatePath = path_1.default.join(__dirname, '../../templates/', 'confirmation-email.ejs');
    let templateData;
    if (type === 'confirm') {
        templateData = {
            subject: 'Confirm Your Email',
            title: 'Confirm Your Email',
            message: 'Click the button below to confirm your email:',
            link: `${index_1.config.appURL}/confirm-user/${confirmationToken}`,
            ctaText: 'Confirm Email'
        };
    }
    else {
        templateData = {
            subject: 'Reset Your Password',
            title: 'Reset Your Password',
            message: 'Click the button below to reset your password:',
            link: `${index_1.config.appURL}/reset-password/${confirmationToken}`,
            ctaText: 'Reset Password'
        };
    }
    const htmlContent = await ejs_1.default.renderFile(templatePath, templateData);
    const mailOptions = {
        from: index_1.config.nodemailer.user,
        to: email,
        subject: templateData.subject,
        html: htmlContent
    };
    await nodemailerConfig_1.default.sendMail(mailOptions);
}
exports.default = sendEmail;
