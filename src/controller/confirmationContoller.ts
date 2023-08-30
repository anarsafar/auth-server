import { Request, Response } from 'express';

import User from '../model/userModel';

const confirmUser = async (req: Request, res: Response) => {
    const { token } = req.params;

    try {
        const user = await User.findOne({ confirmationToken: token });

        if (!user) {
            res.status(404).render('result', { resultHeader: 'User Confirmation Result', resultMessage: 'Invalid or expired token' });
        } else if (user.confirmed) {
            return res.status(409).render('result', { resultHeader: 'User Confirmation Result', resultMessage: 'Email already confirmed.' });
        } else {
            user.confirmed = true;

            await user.save();

            return res.status(201).render('result', { resultHeader: 'User Confirmation Result', resultMessage: 'Email confirmed successfully. You can now log in.' });
        }
    } catch (error) {
        return res.status(500).render('result', { resultHeader: 'User Confirmation Result', resultMessage: 'An error occurred during email confirmation' });
    }
};

export default confirmUser;
