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
 * /auth/github:
 *   get:
 *     summary: Initiate GitHub authentication
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               message: Redirecting to GitHub for authentication
 */

/**
 * @swagger
 * /auth/github/callback:
 *   get:
 *     summary: GitHub authentication callback
 *     tags: [Authentication]
 *     responses:
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: An error occurred during authentication
 */
`;
