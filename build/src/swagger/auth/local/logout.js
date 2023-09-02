"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutesSwagger = void 0;
exports.authRoutesSwagger = `
/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Authentication routes
 */

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: User log out
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               message: Logged out successfully
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             example:
 *               error: Access token is missing or invalid
 *       403:
 *         description: Forbidden
 *         content:
 *           application/json:
 *             example:
 *               error: Access token is blacklisted or invalid
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: An error occurred
 */
`;
