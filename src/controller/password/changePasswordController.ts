import { Request, RequestHandler, Response } from 'express';
import bcrypt from 'bcrypt';
import { AuthenticatedRequest } from '../../types/jwtType';

import User from '../../model/userModel';

const changePassword: RequestHandler = async (req: AuthenticatedRequest | any, res: Response) => {
    const { currentPassword, newPassword } = req.body;

    try {
        if (!req.user) {
            return res.status(401).json({ error: 'Access Denied: Unauthorized' });
        }

        const { userId } = req.user;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(currentPassword, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ error: 'Invalid current password' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;

        await user.save();

        res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while changing the password' });
    }
};

export default changePassword;
