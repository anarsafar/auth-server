import Joi from 'joi';

import validateSchema from '../../middleware/validateSchema';

const updateUserSchema = Joi.object({
    name: Joi.string().min(3).required(),
    bio: Joi.string().max(150).required(),
    phone: Joi.string().min(6).max(20).required(),
    image: Joi.object()
});

const validateUpdateUserSchema = validateSchema(updateUserSchema);

export default validateUpdateUserSchema;
