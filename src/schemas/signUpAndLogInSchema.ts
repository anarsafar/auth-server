import Joi from 'joi';
import validateSchema from '../middleware/validateSchema';

const signUpandLogInSchema = Joi.object({
    email: Joi.string()
        .email()
        .regex(/^\S+@\S+\.\S+$/)
        .required()
        .messages({
            'string.base': 'Email must be a valid string',
            'string.email': 'Please enter a valid email address',
            'string.pattern.base': 'Email must be a valid format'
        }),
    password: Joi.string()
        .min(8)
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%^*?&()])[A-Za-z\d@$!%^*?&()]+$/)
        .required()
        .messages({
            'string.base': 'Password must be a valid string',
            'string.min': 'Password must be at least {{#limit}} characters long',
            'string.pattern.base': 'Password must include uppercase, lowercase, number and at least one symbol'
        })
});

const ValidateSignUpandLogInSchema = validateSchema(signUpandLogInSchema);

export default ValidateSignUpandLogInSchema;
