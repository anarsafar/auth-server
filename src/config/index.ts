import dotenv from 'dotenv';

dotenv.config();

// !Mongo Config
const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 8080;
const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_DB_NAME = process.env.DB_NAME || 'test';
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster.mjzp3pa.mongodb.net/${MONGO_DB_NAME}`;

// ! Firebase Config
const FIREBASE_API = process.env.FIREBASE_API || '';
const AUTH_DOMAIN = process.env.AUTH_DOMAIN || '';
const PROJECT_ID = process.env.PROJECT_ID || '';
const STORAGE_BUCKET = process.env.STORAGE_BUCKET || '';
const SENDER = process.env.SENDER || '';
const APP_ID = process.env.APP_ID || '';

// ! Nodemailer Config
const USER = process.env.MAIL_USERNAME || '';
const CLIENT_ID = process.env.OAUTH_CLIENTID || '';
const CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET || '';
const REFRESH_TOKEN = process.env.OAUTH_REFRESH_TOKEN || '';

// ! JWT Config
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || '';
const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || '';

// ! App URL
const APP_URL = process.env.AUTH_SERVER_URL || '';

// ! Passport.js google config
const CLIENT_ID_PASSPORT = process.env.OAUTH_CLIENTID_PASSPORT || '';
const CLIENT_SECRET_PASSPORT = process.env.OAUTH_CLIENT_SECRET_PASSPORT || '';

// ! Facebook passport config
const CLIENT_ID_FACEBOOK = process.env.FACEBOOK_APP_ID || '';
const CLIENT_SECRET_FACEBOOK = process.env.FACEBOOK_APP_SECRET || '';

// ! Github passport config
const CLIENT_ID_GITHUB = process.env.GITHUB_APP_ID || '';
const CLIENT_SECRET_GITHUB = process.env.GITHUB_APP_SECRET || '';

// ! scheduleConfig
const SCHEDULE_CONFIG = process.env.SCHEDULE_CONFIG || '* * * *';

export const config = {
    mongo: {
        username: MONGO_USERNAME,
        password: MONGO_PASSWORD,
        url: MONGO_URL
    },
    server: {
        port: SERVER_PORT
    },
    firebaseConfig: {
        apiKey: FIREBASE_API,
        authDomain: AUTH_DOMAIN,
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: SENDER,
        appId: APP_ID
    },
    nodemailer: {
        user: USER,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN
    },
    jwtTokens: {
        refreshSecretKey: JWT_REFRESH_SECRET,
        accessSecretKey: JWT_ACCESS_SECRET
    },
    passport: {
        clientId: CLIENT_ID_PASSPORT,
        secretKey: CLIENT_SECRET_PASSPORT
    },
    facebook: {
        clientId: CLIENT_ID_FACEBOOK,
        secretKey: CLIENT_SECRET_FACEBOOK
    },
    github: {
        clientId: CLIENT_ID_GITHUB,
        secretKey: CLIENT_SECRET_GITHUB
    },
    scheduleConfig: SCHEDULE_CONFIG,
    appURL: APP_URL
};
