"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_schedule_1 = __importDefault(require("node-schedule"));
const blacklistModel_1 = __importDefault(require("../../model/blacklistModel"));
node_schedule_1.default.scheduleJob('0 * * * *', async () => {
    try {
        const now = new Date();
        await blacklistModel_1.default.deleteMany({ expiration: { $lt: now } }).exec();
        console.log('Expired tokens removed from blacklist');
    }
    catch (error) {
        console.error('Error cleaning up blacklist:', error);
    }
});
