import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import tokenBlacklistService from '../../service/tokens/tokenBlacklistService';
import { config } from '../../config';

const logOut = async (req: Request, res: Response) => {
    try {
        const accessToken = req.headers.authorization?.split(' ')[1] as string;
        const { refreshToken } = req.cookies;

        const decodedAccessToken: any = jwt.verify(accessToken, config.jwtTokens.accessSecretKey);
        const decodedRefreshToken: any = jwt.verify(refreshToken, config.jwtTokens.refreshSecretKey);

        await tokenBlacklistService.addToBlacklist(accessToken, decodedAccessToken.exp, 'access');
        await tokenBlacklistService.addToBlacklist(refreshToken, decodedRefreshToken.exp, 'refresh');

        res.clearCookie('refreshToken');
        res.json({ message: 'Logged out successfully' });
    } catch (error) {
        res.status(500).json({ error: `An error occurred: ${error}` });
    }
};

export default logOut;
