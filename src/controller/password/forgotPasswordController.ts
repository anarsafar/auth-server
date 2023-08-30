import { NextFunction, Request, Response } from 'express';
import crypto from 'crypto';

import User from '../../model/userModel';
import sendResetPasswordEmail from '../../service/sendEmailService';

const forgotPassword = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        if (user) {
            const resetToken = crypto.randomBytes(20).toString('hex');
            user.resetToken = resetToken;
            user.resetTokenExpiration = Date.now() + 3600000; // Token expires in 1 hour

            await user.save();
            await sendResetPasswordEmail(user.email as string, resetToken, 'reset');

            return res.status(200).json({ message: 'check email for reset password' });
        } else {
            return res.status(200).json({ error: 'User does not exist' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'An error occurred while requesting password reset' });
    }
};

export default forgotPassword;
