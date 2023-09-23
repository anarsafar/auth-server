"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const validateSchema_1 = __importDefault(require("../../middleware/validateSchema"));
const updateUserSchema = joi_1.default.object({
    name: joi_1.default.string().min(3).required(),
    bio: joi_1.default.string().max(150).required(),
    phone: joi_1.default.string().min(6).max(20).required(),
    image: joi_1.default.alternatives().try(joi_1.default.object(), joi_1.default.string())
});
const validateUpdateUserSchema = (0, validateSchema_1.default)(updateUserSchema);
exports.default = validateUpdateUserSchema;
