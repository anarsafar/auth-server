import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import User from '../model/userModel';
import tokenBlacklistService from '../service/tokens/tokenBlacklistService';
import { config } from '../config';
import { generateAccessToken } from '../utils/authUtils';
import BlacklistToken from '../model/blacklistModel';

const refreshToken = async (req: Request, res: Response) => {
    try {
        const { refreshToken } = req.cookies;

        if (!refreshToken) {
            return res.status(401).json({ error: 'Refresh token is missing' });
        }

        const blacklistedRefreshToken = await BlacklistToken.findOne({ token: refreshToken });

        if (blacklistedRefreshToken) {
            return res.status(401).json({ error: 'Refresh token is blacklisted' });
        }

        const decodedRefreshToken: any = jwt.verify(refreshToken, config.jwtTokens.refreshSecretKey, { algorithms: ['HS256'] });

        const user = await User.findById(decodedRefreshToken.userId);

        if (!user) {
            return res.status(401).json({ error: 'Invalid refresh token' });
        }

        const accessToken = req.headers.authorization?.split(' ')[1] as string;
        console.log(accessToken, typeof accessToken);
        if (accessToken != 'null') {
            await tokenBlacklistService.addToBlacklist(accessToken, Date.now() / 1000, 'access');
        }

        const newAccessToken = generateAccessToken(user._id);

        res.status(200).json({ accessToken: newAccessToken });
    } catch (error) {
        res.status(500).json({ error: `An error occurred ${JSON.stringify(error)}` });
    }
};

export default { refreshToken };
