import Joi from 'joi';
import validateSchema from '../middleware/validateSchema';

const forgotPasswordSchema = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .regex(/^\S+@\S+\.\S+$/)
        .required()
        .messages({
            'string.base': 'Email must be a valid string',
            'string.email': 'Please enter a valid email address',
            'string.pattern.base': 'Email must be a valid format'
        })
});

const ValidateForgotPassword = validateSchema(forgotPasswordSchema);

export default ValidateForgotPassword;
