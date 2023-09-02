"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const validateSchema_1 = __importDefault(require("../../middleware/validateSchema"));
const updatePasswordSchema = joi_1.default.object({
    currentPassword: joi_1.default.string().min(8).pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])')).required().messages({
        'string.base': 'Password must be a valid string',
        'string.min': 'Password must be at least {{#limit}} characters long',
        'string.pattern.base': 'Password must include uppercase, lowercase, number and at least one symbol'
    }),
    newPassword: joi_1.default.string().min(8).pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])')).required().messages({
        'string.base': 'Password must be a valid string',
        'string.min': 'Password must be at least {{#limit}} characters long',
        'string.pattern.base': 'Password must include uppercase, lowercase, number and at least one symbol'
    })
});
const validateUpdatePasswordSchema = (0, validateSchema_1.default)(updatePasswordSchema);
exports.default = validateUpdatePasswordSchema;
