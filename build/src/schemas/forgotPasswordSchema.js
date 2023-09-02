"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const validateSchema_1 = __importDefault(require("../middleware/validateSchema"));
const forgotPasswordSchema = joi_1.default.object({
    email: joi_1.default.string()
        .email({ tlds: { allow: false } })
        .regex(/^\S+@\S+\.\S+$/)
        .required()
        .messages({
        'string.base': 'Email must be a valid string',
        'string.email': 'Please enter a valid email address',
        'string.pattern.base': 'Email must be a valid format'
    })
});
const ValidateForgotPassword = (0, validateSchema_1.default)(forgotPasswordSchema);
exports.default = ValidateForgotPassword;
