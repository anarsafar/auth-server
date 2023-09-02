"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = void 0;
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({
    storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
            cb(null, true);
        }
        else {
            return cb(new Error('Invalid mime type'));
        }
    }
});
const uploadSingleImage = upload.single('image');
const uploadImage = (req, res, next) => {
    uploadSingleImage(req, res, (err) => {
        if (err) {
            return res.status(400).send({ error: err.message });
        }
        next();
    });
};
exports.uploadImage = uploadImage;
