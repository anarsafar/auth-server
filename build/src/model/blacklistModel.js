"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const blacklistSchema = new mongoose_1.Schema({
    token: { type: String, required: true },
    expiration: { type: Date, required: true },
    type: { type: String, required: true }
});
blacklistSchema.index({ expiration: 1 });
const BlacklistToken = (0, mongoose_1.model)('BlacklistToken', blacklistSchema);
exports.default = BlacklistToken;
