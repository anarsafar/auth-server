import passport, { use } from 'passport';

import User from '../../model/userModel';
import { authenticateUser } from '../../utils/authUtils';

const githubAuth = (req: Request | any, res: Response | any) => {
    passport.authenticate('github', { session: false }, async (err: Error | null, user: any, info: any) => {
        if (err) {
            return res.status(500).json({ error: 'An error occurred during authentication' });
        }

        if (!user) {
            return res.status(401).json({ error: 'Github authentication failed' });
        }

        try {
            const { id } = user;
            const userDB = await User.findOne({ githubId: id });

            if (userDB) {
                authenticateUser(userDB, res, 'github');
            } else {
                const newUser = new User({
                    email: '',
                    password: '',
                    name: user.displayName,
                    phone: '',
                    bio: user._json.bio,
                    image: user.photos[0]?.value,
                    confirmed: true,
                    githubId: user.id
                });

                await newUser.save();
                authenticateUser(newUser, res, 'github');
            }
        } catch (error) {
            return res.status(500).json({ error: 'Something went wrong', message: error });
        }
    })(req, res);
};

export default githubAuth;
