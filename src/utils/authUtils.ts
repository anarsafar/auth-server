import jwt from 'jsonwebtoken';

import { UserPayload } from '../types/jwtType';
import { config } from '../config';

export const generateAccessToken = (userId: string) => {
    const payload: UserPayload = { userId };
    return jwt.sign(payload, config.jwtTokens.accessSecretKey, { algorithm: 'HS256', expiresIn: '5h' });
};

export const generateRefreshToken = (userId: string) => {
    const payload: UserPayload = { userId };
    return jwt.sign(payload, config.jwtTokens.refreshSecretKey, { algorithm: 'HS256', expiresIn: '7d' });
};

export const authenticateUser = (user: any, res: Response | any, service: 'google' | 'facebook' | 'github') => {
    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: config.nodeEnv === 'production', maxAge: 7 * 24 * 60 * 60 * 1000, sameSite: 'none', path: '/' }); // 7 days
    res.redirect(`${config.frontendURL}/auth/login?accessToken=${accessToken}`);
};
