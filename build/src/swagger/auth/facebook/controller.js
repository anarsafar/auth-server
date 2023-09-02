"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.facebookAuthSwagger = void 0;
exports.facebookAuthSwagger = `
/**
 * @swagger
 * /auth/facebook/callback:
 *   get:
 *     summary: Facebook authentication callback
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
 *                   example: Facebook authentication succeeded
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
 *                   example: Facebook authentication failed
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: An error occurred during authentication
 */
`;
