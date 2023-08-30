import logIn from './local/logIn';
import logOut from './local/logOut';
import signUp from './local/signUp';
import facebookAuth from './social/facebook';
import googleAuth from './social/google';
import githubAuth from './social/github';

const authController = {
    logIn,
    logOut,
    signUp,
    facebookAuth,
    googleAuth,
    githubAuth
};

export default authController;
