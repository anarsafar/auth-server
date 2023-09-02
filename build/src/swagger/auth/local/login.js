"use strict";
// authRoutesSwagger.ts
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
 * /auth/login:
 *   post:
 *     summary: User login
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/schemas/loginAndSignup'
 *           examples:
 *             example-1:
 *               value:
 *                 email: user@example.com
 *                 password: MySecurePassword123!
 *             example-2:
 *               value:
 *                 email: ""
 *                 password: ""
 *             example-3:
 *               value:
 *             example-4:
 *               value:
 *                 email: invalid-email-format
 *                 password: InvalidPassword
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               accessToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *         headers:
 *           Set-Cookie:
 *             schema:
 *               type: string
 *             description: Refresh token cookie
 *             example: refreshToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...; HttpOnly; Max-Age=604800; Path=/
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             example:
 *               error: User does not exist
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: An error occurred
 */
`;
