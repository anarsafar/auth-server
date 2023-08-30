import { NextFunction, Response, Request } from 'express';
import Joi from 'joi';

interface ValidationSchema {
    validate: (value: any) => Joi.ValidationResult;
}

const validateSchema = (schema: ValidationSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body);

        if (error) {
            return res.status(400).json({ error: 'Validation error', details: error.details });
        }

        next();
    };
};

export default validateSchema;
