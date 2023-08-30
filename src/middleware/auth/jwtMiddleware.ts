import { NextFunction, RequestHandler, Response } from 'express';
import jwt, { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken';

import { AuthenticatedRequest, UserPayload } from '../../types/jwtType';
import { config } from '../../config';

const authenticateToken: RequestHandler = async (req: AuthenticatedRequest | any, res: Response, next: NextFunction) => {
    try {
        const { refreshToken } = req.cookies;
        const accessToken = req.headers.authorization?.split(' ')[1] as string;

        const decodedAccessToken: any = jwt.verify(accessToken, config.jwtTokens.accessSecretKey);
        const decodedRefreshToken: any = jwt.verify(refreshToken, config.jwtTokens.refreshSecretKey);

        if (decodedAccessToken.userId !== decodedRefreshToken.userId) {
            return res.status(401).json({ error: 'User IDs in tokens do not match' });
        }

        const user = decodedAccessToken as UserPayload;
        req.user = user;
        next();
    } catch (error) {
        if (error instanceof TokenExpiredError) {
            return res.status(401).json({ error: 'Token has expired' });
        } else if (error instanceof JsonWebTokenError) {
            return res.status(401).json({ error: 'Invalid token' });
        } else {
            res.status(500).json({ error: 'An error occurred' });
        }
    }
};

export default authenticateToken;
