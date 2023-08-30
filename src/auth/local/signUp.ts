import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

import User from '../../model/userModel';
import sendConfirmationEmail from '../../service/sendEmailService';
import { UserDocumentModel } from '../../types/userType';

async function updateUserAndSendConfirmationEmail(existingUser: UserDocumentModel, password: string) {
    existingUser.password = await bcrypt.hash(password, 10);
    existingUser.confirmationToken = crypto.randomBytes(20).toString('hex');
    await User.updateOne({ email: existingUser.email }, existingUser);
    await sendConfirmationEmail(existingUser.email as string, existingUser.confirmationToken, 'confirm');
}

const signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;

        let existingUser = await User.findOne({ email });

        if (existingUser && !existingUser?.confirmed) {
            await updateUserAndSendConfirmationEmail(existingUser, password);
            return res.status(200).json({ message: 'Check email inbox for new confirmation link' });
        }

        if (existingUser) {
            return res.status(409).json({ error: 'Email already exist' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const confirmationToken = crypto.randomBytes(20).toString('hex');

        const user = new User({
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
        await sendConfirmationEmail(email, confirmationToken, 'confirm');

        res.status(200).json({ message: 'Check email inbox for confirmation link' });
    } catch (error) {
        res.status(500).json({ error: 'An error occured during sign up' });
    }
};

export default signUp;
