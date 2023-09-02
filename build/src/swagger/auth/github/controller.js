"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.githubAuthSwagger = void 0;
exports.githubAuthSwagger = `
/**
 * @swagger
 * /auth/github/callback:
 *   get:
 *     summary: GitHub authentication callback
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Response message
 *                   example: GitHub authentication succeeded
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 *                   example: GitHub authentication failed
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: An error occurred during authentication
 */
`;
