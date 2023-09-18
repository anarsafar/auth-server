import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { Strategy as GitHubStrategy } from 'passport-github2';

import { config } from '../../config';

const googleStrategy = new GoogleStrategy(
    {
        clientID: config.passport.clientId,
        clientSecret: config.passport.secretKey,
        callbackURL: `${config.appURL}/auth/google/callback`
    },
    (accessToken, refreshToken, profile, done) => {
        // console.log(profile);
        done(null, profile);
    }
);

const facebookStrategy = new FacebookStrategy(
    {
        clientID: config.facebook.clientId,
        clientSecret: config.facebook.secretKey,
        callbackURL: `${config.appURL}/auth/facebook/callback`
    },
    function (accessToken, refreshToken, profile, cb) {
        console.log(profile);
        cb(null, profile);
    }
);

const githubStrategy = new GitHubStrategy(
    {
        clientID: config.github.clientId,
        clientSecret: config.github.secretKey,
        callbackURL: `${config.appURL}/auth/github/callback`
    },
    (accessToken: string, refreshToken: string, profile: any, done: any) => {
        console.log(profile);
        done(null, profile);
    }
);

const strategy = { facebookStrategy, googleStrategy, githubStrategy };

export default strategy;
