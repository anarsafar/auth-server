export const forgotPasswordSwagger = `
/**
 * @swagger
 * tags:
 *   name: Forgot Password
 *   description: Forgot password request route
 */

/**
 * @swagger
 * /request-reset:
 *   post:
 *     summary: Request password reset
 *     tags: [Forgot Password]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/schemas/validatePassword'
 *           example:
 *             email: user@example.com
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               message: Check email for password reset instructions
 *       404:
 *         description: User does not exist
 *         content:
 *           application/json:
 *             example:
 *               error: User does not exist
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: An error occurred while requesting password reset
 */
`;
