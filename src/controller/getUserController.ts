import { NextFunction, Request, RequestHandler, Response } from 'express';

import User from '../model/userModel';
import { AuthenticatedRequest, UserPayload } from '../types/jwtType';

const getUser: RequestHandler = async (req: AuthenticatedRequest | any, res: Response, next: NextFunction) => {
    const { userId } = req.user as UserPayload;

    try {
        User.findById(userId)
            .select('-password')
            .select('-confirmationToken')
            .select('-confirmed')
            .select('-resetToken')
            .select('-resetTokenExpiration')
            .then((user) => (user ? res.status(200).json(user) : res.status(404).json({ message: 'user not found' })))
            .catch((error) => res.status(500).json({ error }));
    } catch (error) {
        res.status(500).json({ error: 'something went wrong' });
    }
};

export default getUser;
