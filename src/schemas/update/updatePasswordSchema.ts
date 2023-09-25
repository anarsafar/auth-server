import Joi from 'joi';
import validateSchema from '../../middleware/validateSchema';

const updatePasswordSchema = Joi.object({
    currentPassword: Joi.string().min(8).pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%^*?&()])[A-Za-zd@$!%^*?&()]+$')).required().messages({
        'string.base': 'Password must be a valid string',
        'string.min': 'Password must be at least {{#limit}} characters long',
        'string.pattern.base': 'Password must include uppercase, lowercase, number and at least one symbol'
    }),
    newPassword: Joi.string().min(8).pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%^*?&()])[A-Za-zd@$!%^*?&()]+$')).required().messages({
        'string.base': 'Password must be a valid string',
        'string.min': 'Password must be at least {{#limit}} characters long',
        'string.pattern.base': 'Password must include uppercase, lowercase, number and at least one symbol'
    })
});

const validateUpdatePasswordSchema = validateSchema(updatePasswordSchema);

export default validateUpdatePasswordSchema;
