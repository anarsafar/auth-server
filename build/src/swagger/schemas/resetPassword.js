"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPasswordSchemaSwagger = void 0;
exports.resetPasswordSchemaSwagger = `
/**
 * @swagger
 * components:
 *   schemas:
 *     ResetPasswordRequest:
 *       type: object
 *       properties:
 *         password:
 *           type: string
 *           minLength: 8
 *           pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])"
 *       required:
 *         - password
 */
`;
