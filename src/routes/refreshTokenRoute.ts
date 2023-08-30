import express from 'express';

import refreshTokenController from '../controller/refreshTokenController';
import checkBlackListMiddleware from '../middleware/auth/checkBlackListMiddleware';

const router = express.Router();

router.post('/', checkBlackListMiddleware, refreshTokenController.refreshToken);

export default router;
