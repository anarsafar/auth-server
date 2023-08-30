import express, { Router } from 'express';

import authenticateToken from '../middleware/auth/jwtMiddleware';
import getUser from '../controller/getUserController';
import updateUser from '../controller/updateUserController';
import validateUpdateUserSchema from '../schemas/update/updateUserSchema ';
import checkTokensMiddleware from '../middleware/auth/checkBlackListMiddleware';
import { uploadImage } from '../middleware/uploadImage';

const router: Router = express.Router();

router.get('/', checkTokensMiddleware, authenticateToken, getUser);
router.put('/', checkTokensMiddleware, authenticateToken, uploadImage, validateUpdateUserSchema, updateUser);

export default router;
