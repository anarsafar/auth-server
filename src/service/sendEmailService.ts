import ejs from 'ejs';
import path from 'path';

import { config } from '../config/index';
import transporter from '../config/nodemailerConfig';

async function sendEmail(email: string, confirmationToken: string, type: 'reset' | 'confirm') {
    let templatePath: string = path.join(__dirname, '../../templates/', 'confirmation-email.ejs');
    let templateData: {
        subject: string;
        title: string;
        message: string;
        link: string;
        ctaText: string;
    };

    if (type === 'confirm') {
        templateData = {
            subject: 'Confirm Your Email',
            title: 'Confirm Your Email',
            message: 'Click the button below to confirm your email:',
            link: `${config.appURL}/confirm-user/${confirmationToken}`,
            ctaText: 'Confirm Email'
        };
    } else {
        templateData = {
            subject: 'Reset Your Password',
            title: 'Reset Your Password',
            message: 'Click the button below to reset your password:',
            link: `${config.appURL}/reset-password/${confirmationToken}`,
            ctaText: 'Reset Password'
        };
    }

    const htmlContent = await ejs.renderFile(templatePath, templateData);

    const mailOptions = {
        from: config.nodemailer.user,
        to: email,
        subject: templateData.subject,
        html: htmlContent
    };

    await transporter.sendMail(mailOptions);
}

export default sendEmail;
