"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logIn_1 = __importDefault(require("./local/logIn"));
const logOut_1 = __importDefault(require("./local/logOut"));
const signUp_1 = __importDefault(require("./local/signUp"));
const facebook_1 = __importDefault(require("./social/facebook"));
const google_1 = __importDefault(require("./social/google"));
const github_1 = __importDefault(require("./social/github"));
const authController = {
    logIn: logIn_1.default,
    logOut: logOut_1.default,
    signUp: signUp_1.default,
    facebookAuth: facebook_1.default,
    googleAuth: google_1.default,
    githubAuth: github_1.default
};
exports.default = authController;
