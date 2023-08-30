import express from 'express';

import authenticateToken from '../../middleware/auth/jwtMiddleware';
import validateUpdatePasswordSchema from '../../schemas/update/updatePasswordSchema';
import changePassword from '../../controller/password/changePasswordController';
import checkTokensMiddleware from '../../middleware/auth/checkBlackListMiddleware';

const changePasswordRoute = express.Router();

changePasswordRoute.put('/', checkTokensMiddleware, authenticateToken, validateUpdatePasswordSchema, changePassword);

export default changePasswordRoute;
