"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    email: { type: String, unique: true },
    password: { type: String },
    name: { type: String },
    bio: { type: String },
    phone: { type: String },
    image: { type: String },
    confirmed: { type: Boolean, default: false },
    confirmationToken: { type: String },
    resetToken: { type: String },
    resetTokenExpiration: { type: Number },
    googleId: { type: String },
    facebookId: { type: String },
    githubId: { type: String }
}, {
    versionKey: false
});
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
