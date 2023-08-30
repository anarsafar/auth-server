import express from 'express';
import confirmUser from '../controller/confirmationContoller';

const router = express.Router();

router.get('/:token', confirmUser);

export default router;
