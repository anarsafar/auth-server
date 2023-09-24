import express from 'express';

import refreshTokenController from '../controller/refreshTokenController';

const router = express.Router();

router.post('/', refreshTokenController.refreshToken);

export default router;
