"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateSchema = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: 'Validation error', details: error.details });
        }
        next();
    };
};
exports.default = validateSchema;
