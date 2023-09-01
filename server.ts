import express, { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { initializeApp } from 'firebase/app';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger-config';
import passport from 'passport';

import authRoutes from './src/routes/authRoutes';
import confirmationRouter from './src/routes/confirmationRoute';
import userRoutes from './src/routes/userRoutes';
import refreshTokenRoute from './src/routes/refreshTokenRoute';
import forgotPasswordRouter from './src/routes/password/forgotPasswordRoute';
import resetPasswordRouter from './src/routes/password/resetPasswordRoute';
import changePasswordRoute from './src/routes/password/changePasswordRoute';

import logger from './src/middleware/loggerMiddleware';
import logError from './src/middleware/logErrorMiddleware';
import strategy from './src/middleware/auth/passportMiddleware';

import { config } from './src/config';

const router = express();
initializeApp(config.firebaseConfig);

router.use(express.static(path.join(__dirname, 'public')));
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.use(cors());
router.use(cookieParser());
passport.use(strategy.googleStrategy);
passport.use(strategy.facebookStrategy);
passport.use(strategy.githubStrategy);
router.use(passport.initialize());
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

router.set('view engine', 'ejs');
router.set('views', path.join(__dirname, 'views'));
router.set('templates', path.join(__dirname, 'templates'));

mongoose
    .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        console.log('MongoDB connected successfully');
        startServer();
    })
    .catch((err) => console.error(err));

const startServer = () => {
    router.use(logger);
    router.get('/', (req: Request, res: Response, next: NextFunction) => res.status(200).json({ message: 'Welcome auth API' }));
    router.use('/auth/', authRoutes);
    router.use('/confirm-user', confirmationRouter);
    router.use('/request-reset/', forgotPasswordRouter);
    router.use('/reset-password', resetPasswordRouter);
    router.use('/change-password', changePasswordRoute);
    router.use('/refresh-token', refreshTokenRoute);
    router.use('/profile/', userRoutes);
    router.use(logError);

    router.listen(config.server.port, () => console.log(`Server is running on port ${config.server.port}`));
};
