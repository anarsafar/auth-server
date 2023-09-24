import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import User from '../../model/userModel';
import { generateAccessToken, generateRefreshToken } from '../../utils/authUtils';
import { config } from '../../config/';

const logIn = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ error: 'User does not exist' });
        }

        if (!user.confirmed) {
            return res.status(401).json({ error: 'Please confirm your email.' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password credential' });
        }

        const accessToken = generateAccessToken(user._id);
        const refreshToken = generateRefreshToken(user._id);

        res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: config.nodeEnv === 'production', maxAge: 7 * 24 * 60 * 60 * 1000, sameSite: 'none', path: '/' }); // 7 days
        res.status(200).json({ accessToken });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
};

export default logIn;
