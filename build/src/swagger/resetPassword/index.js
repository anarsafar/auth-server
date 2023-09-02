"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPasswordSwagger = void 0;
exports.resetPasswordSwagger = `
/**
 * @swagger
 * tags:
 *   name: Reset Password
 *   description: Reset password routes
 */

/**
 * @swagger
 * /reset-password/{token}:
 *   get:
 *     summary: Show reset password page
 *     tags: [Reset Password]
 *     parameters:
 *       - in: path
 *         name: token
 *         required: true
 *         schema:
 *           type: string
 *         description: The reset password token
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           text/html:
 *             example: HTML content of the reset password page
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: An error occurred while showing reset password page
 *
 *   post:
 *     summary: Reset password
 *     tags: [Reset Password]
 *     parameters:
 *       - in: path
 *         name: token
 *         required: true
 *         schema:
 *           type: string
 *         description: The reset password token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/schemas/resetPassword'
 *           example:
 *             password: NewPassword123!
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               message: Password reset successful
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: An error occurred while resetting password
 */
`;
