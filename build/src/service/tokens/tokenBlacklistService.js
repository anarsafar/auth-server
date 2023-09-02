"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blacklistModel_1 = __importDefault(require("../../model/blacklistModel"));
const addToBlacklist = async (token, decodedTokenExp, type) => {
    try {
        const existingToken = await blacklistModel_1.default.findOne({ token });
        if (existingToken) {
            throw new Error('Token already exists in the blacklist');
        }
        const expiration = new Date(decodedTokenExp * 1000);
        if (type === 'access') {
            expiration.setHours(expiration.getHours() + 5);
        }
        else if (type === 'refresh') {
            expiration.setDate(expiration.getDate() + 7);
        }
        const newBlacklistToken = new blacklistModel_1.default({
            token,
            expiration,
            type
        });
        await newBlacklistToken.save();
    }
    catch (error) {
        throw new Error('Unable to add token to blacklist');
    }
};
exports.default = { addToBlacklist };
