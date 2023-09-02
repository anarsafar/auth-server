"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddlewareSwagger = void 0;
exports.authMiddlewareSwagger = `
/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT

 *   responses:
 *     Unauthorized:
 *       description: Unauthorized
 *       content:
 *         application/json:
 *           example:
 *             error: Access token is missing or invalid
 *     Forbidden:
 *       description: Forbidden
 *       content:
 *         application/json:
 *           example:
 *             error: Access token is blacklisted or invalid
 * */

/**
 * @swagger
 * security:
 *   - bearerAuth: []
 */
`;
