"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const storage_1 = require("firebase/storage");
const userModel_1 = __importDefault(require("../model/userModel"));
const updateUser = async (req, res, next) => {
    const { userId } = req.user;
    const { file } = req;
    let updatedUserInfo = {};
    try {
        if (!file || !req.body.image) {
            return res.status(400).json({ error: 'No image file provided' });
        }
        if (file) {
            const storage = (0, storage_1.getStorage)();
            const storageRef = (0, storage_1.ref)(storage, 'images/' + file.originalname);
            await (0, storage_1.uploadBytes)(storageRef, file.buffer);
            const downloadURL = await (0, storage_1.getDownloadURL)(storageRef);
            updatedUserInfo = { ...req.body, image: downloadURL };
        }
        else {
            updatedUserInfo = { ...req.body };
        }
        userModel_1.default.findByIdAndUpdate(userId, updatedUserInfo, { new: true })
            .select('-password')
            .select('-confirmationToken')
            .select('-confirmed')
            .select('-resetToken')
            .select('-resetTokenExpiration')
            .then((updatedUser) => {
            if (updatedUser) {
                res.status(200).json({ user: updatedUser, message: 'User updated successfully' });
            }
            else {
                res.status(404).json({ message: 'User not found' });
            }
        })
            .catch((error) => res.status(500).json({ error }));
    }
    catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
};
exports.default = updateUser;
