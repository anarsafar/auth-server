import { Router } from 'express';

import resetPasswordController from '../../controller/password/resetPasswordController';
import validateResetPassword from '../../schemas/resetSchema';

const resetPasswordRouter = Router();

resetPasswordRouter.get('/:token', resetPasswordController.showResetPage);
resetPasswordRouter.post('/:token', validateResetPassword, resetPasswordController.resetPassword);

export default resetPasswordRouter;
