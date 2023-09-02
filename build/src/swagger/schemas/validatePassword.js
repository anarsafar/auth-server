"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forgotPasswordSchemaSwagger = void 0;
exports.forgotPasswordSchemaSwagger = `
/**
 * @swagger
 * components:
 *   schemas:
 *     ForgotPasswordRequest:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *       required:
 *         - email
 */
`;
