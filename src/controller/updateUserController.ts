import { NextFunction, Request, RequestHandler, Response } from 'express';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import User from '../model/userModel';
import { AuthenticatedRequest, UserPayload } from '../types/jwtType';

const updateUser: RequestHandler = async (req: AuthenticatedRequest | any, res: Response, next: NextFunction) => {
    const { userId } = req.user as UserPayload;
    const { file } = req;

    try {
        if (!file) {
            return res.status(400).json({ error: 'No image file provided' });
        }

        const storage = getStorage();
        const storageRef = ref(storage, 'images/' + file.originalname);
        await uploadBytes(storageRef, file.buffer);

        const downloadURL = await getDownloadURL(storageRef);
        const updatedUserInfo = { ...req.body, image: downloadURL };

        User.findByIdAndUpdate(userId, updatedUserInfo, { new: true })
            .select('-password')
            .select('-confirmationToken')
            .select('-confirmed')
            .select('-resetToken')
            .select('-resetTokenExpiration')
            .then((updatedUser) => {
                if (updatedUser) {
                    res.status(200).json({ user: updatedUser, message: 'User updated successfully' });
                } else {
                    res.status(404).json({ message: 'User not found' });
                }
            })
            .catch((error) => res.status(500).json({ error }));
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
};

export default updateUser;
