import multer from 'multer';
import { Request, Response, NextFunction } from 'express';

const storage = multer.memoryStorage();
const upload = multer({
    storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
            cb(null, true);
        } else {
            return cb(new Error('Invalid mime type'));
        }
    }
});

const uploadSingleImage = upload.single('image');

const uploadImage = (req: Request, res: Response, next: NextFunction) => {
    uploadSingleImage(req, res, (err) => {
        if (err) {
            return res.status(400).send({ error: err.message });
        }
        next();
    });
};

export { uploadImage };
