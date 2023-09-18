"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport_google_oauth20_1 = require("passport-google-oauth20");
const passport_facebook_1 = require("passport-facebook");
const passport_github2_1 = require("passport-github2");
const config_1 = require("../../config");
const googleStrategy = new passport_google_oauth20_1.Strategy({
    clientID: config_1.config.passport.clientId,
    clientSecret: config_1.config.passport.secretKey,
    callbackURL: `${config_1.config.appURL}/auth/google/callback`
}, (accessToken, refreshToken, profile, done) => {
    // console.log(profile);
    done(null, profile);
});
const facebookStrategy = new passport_facebook_1.Strategy({
    clientID: config_1.config.facebook.clientId,
    clientSecret: config_1.config.facebook.secretKey,
    callbackURL: `${config_1.config.appURL}/auth/facebook/callback`
}, function (accessToken, refreshToken, profile, cb) {
    console.log(profile);
    cb(null, profile);
});
const githubStrategy = new passport_github2_1.Strategy({
    clientID: config_1.config.github.clientId,
    clientSecret: config_1.config.github.secretKey,
    callbackURL: `${config_1.config.appURL}/auth/github/callback`
}, (accessToken, refreshToken, profile, done) => {
    console.log(profile);
    done(null, profile);
});
const strategy = { facebookStrategy, googleStrategy, githubStrategy };
exports.default = strategy;
