// authRoutesSwagger.ts

export const authRoutesSwagger = `
/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Authentication routes
 */

/**
 * @swagger
 * /auth/facebook:
 *   get:
 *     summary: Initiate Facebook authentication
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               message: Redirecting to Facebook for authentication
 */

/**
 * @swagger
 * /auth/facebook/callback:
 *   get:
 *     summary: Facebook authentication callback
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
