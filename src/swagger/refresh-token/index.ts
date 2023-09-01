// refreshTokenSwagger.ts

export const refreshTokenSwagger = `
/**
 * @swagger
 * tags:
 *   name: Refresh Token
 *   description: Refresh token routes
 */

/**
 * @swagger
 * /refresh-token:
 *   post:
 *     summary: Refresh access token
 *     tags: [Refresh Token]
 *     security:
 *       - refreshToken: []
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               accessToken: new_access_token_here
 *       401:
 *         description: Invalid refresh token
 *         content:
 *           application/json:
 *             example:
 *               error: Invalid refresh token
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: An error occurred
 */
`;
