import passport from 'passport';

import User from '../../model/userModel';
import { authenticateUser } from '../../utils/authUtils';

const googleAuth = (req: Request | any, res: Response | any) => {
    passport.authenticate('google', async (err: Error | null, user: any, info: any) => {
        if (err) {
            return res.status(500).json({ error: 'An error occurred during authentication' });
        }

        if (!user) {
            return res.status(401).json({ error: 'Google authentication failed' });
        }

        try {
            const googleId = user.id;
            const userDB = await User.findOne({ googleId });

            if (userDB) {
                authenticateUser(userDB, res, 'google');
            } else {
                const newUser = new User({
                    password: '',
                    name: user.displayName,
                    phone: '',
                    bio: '',
                    image: user.photos[0].value,
                    confirmed: true,
                    googleId: user.id
                });

                await newUser.save();
                authenticateUser(newUser, res, 'google');
            }
        } catch (error) {
            return res.status(500).json({ error: 'Something went wrong' });
        }
    })(req, res);
};

export default googleAuth;
