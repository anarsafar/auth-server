import Joi from 'joi';
import validateSchema from '../middleware/validateSchema';

const resetPasswordSchema = Joi.object({
    password: Joi.string().min(8).pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])')).required().messages({
        'string.base': 'Password must be a valid string',
        'string.min': 'Password must be at least {{#limit}} characters long',
        'string.pattern.base': 'Password must include uppercase, lowercase, number and at least one symbol'
    })
});

const validateResetPassword = validateSchema(resetPasswordSchema);

export default validateResetPassword;
