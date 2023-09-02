export const confirmUserSwagger = `
/**
 * @swagger
 * tags:
 *   name: User Confirmation
 *   description: User confirmation route
 */

/**
 * @swagger
 * /confirm-user/{token}:
 *   get:
 *     summary: Confirm user registration via email token
 *     tags: [User Confirmation]
 *     parameters:
 *       - name: token
 *         in: path
 *         required: true
 *         description: Confirmation token received via email
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Email confirmed successfully
 *         content:
 *           application/json:
 *             example:
 *               resultHeader: User Confirmation Result
 *               resultMessage: Email confirmed successfully. You can now log in.
 *       404:
 *         description: Token invalid or expired
 *         content:
 *           application/json:
 *             example:
 *               resultHeader: User Confirmation Result
 *               resultMessage: Invalid or expired token
 *       409:
 *         description: Email already confirmed
 *         content:
 *           application/json:
 *             example:
 *               resultHeader: User Confirmation Result
 *               resultMessage: Email already confirmed.
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               resultHeader: User Confirmation Result
 *               resultMessage: An error occurred during email confirmation
 */
`;
