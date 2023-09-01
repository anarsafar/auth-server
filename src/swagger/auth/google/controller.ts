export const googleAuthSwagger = `
/**
 * @swagger
 * /auth/google/callback:
 *   get:
 *     summary: Google authentication callback
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
 *                   example: Google authentication succeeded
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
 *                   example: Google authentication failed
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: An error occurred during authentication
 */
`;
