"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.securitySchema = void 0;
exports.securitySchema = `
/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */
`;
