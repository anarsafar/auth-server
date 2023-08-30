import passport from 'passport';

import User from '../../model/userModel';
import { authenticateUser } from '../../utils/authUtils';

const facebookAuth = (req: Request | any, res: Response | any) => {
    passport.authenticate('facebook', async (err: Error | null, user: any, info: any) => {
        if (err) {
            return res.status(500).json({ error: 'An error occurred during authentication' });
        }

        if (!user) {
            return res.status(401).json({ error: 'Facebook authentication failed' });
        }

        try {
            const { id } = user;
            const userDB = await User.findOne({ facebookId: id });
            if (userDB) {
                authenticateUser(userDB, res, 'facebook');
            } else {
                const newUser = new User({
                    password: '',
                    name: user.displayName,
                    phone: '',
                    bio: '',
                    image: '',
                    confirmed: true,
                    facebookId: user.id
                });

                await newUser.save();
                authenticateUser(newUser, res, 'facebook');
            }
        } catch (error) {
            return res.status(500).json({ error: 'Something went wrong', message: error });
        }
    })(req, res);
};

export default facebookAuth;
