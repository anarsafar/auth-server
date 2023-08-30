import express from 'express';

import forgotPassword from '../../controller/password/forgotPasswordController';
import ValidateForgotPassword from '../../schemas/forgotPasswordSchema';

const forgotPasswordRouter = express.Router();

forgotPasswordRouter.post('/', ValidateForgotPassword, forgotPassword);

export default forgotPasswordRouter;
