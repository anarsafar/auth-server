"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePasswordSwagger = void 0;
exports.changePasswordSwagger = `
/**
 * @swagger
 * /change-password:
 *   put:
 *     summary: Change user password
 *     tags: [Password]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/changePassword'
 *     examples:
 *       Example1:
 *         value:
 *           currentPassword: "oldPassword123!"
 *           newPassword: "newPassword456!"
 *     responses:
 *       200:
 *         description: Password changed successfully
 *       400:
 *         description: Invalid current password
 *       401:
 *         description: Unauthorized or Token has expired
 *       404:
 *         description: User not found
 *       500:
 *         description: An error occurred while changing the password
 *     security:
 *       - bearerAuth: []
 */
`;
