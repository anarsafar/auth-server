import express, { Router } from 'express';
import passport from 'passport';

import authController from '../auth/';
import loginLimiter from '../middleware/loginLimiter';
import ValidateSignUpandLogInSchema from '../schemas/signUpAndLogInSchema';
import checkTokensMiddleware from '../middleware/auth/checkBlackListMiddleware';

const router: Router = express.Router();

router.post('/signup', ValidateSignUpandLogInSchema, authController.signUp);
router.post('/login', loginLimiter, ValidateSignUpandLogInSchema, authController.logIn);
router.post('/logout', checkTokensMiddleware, authController.logOut);

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', authController.googleAuth);

router.get('/facebook', passport.authenticate('facebook', { scope: ['public_profile', 'email'] }));
router.get('/facebook/callback', authController.facebookAuth);

router.get('/github', passport.authenticate('github', { session: false, scope: ['user:email'] }));
router.get('/github/callback', authController.githubAuth);

export default router;
