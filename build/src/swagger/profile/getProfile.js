"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserProfileSwagger = void 0;
exports.getUserProfileSwagger = `
/**
 * @swagger
 * /profile:
 *   get:
 *     summary: Get user profile information
 *     tags: [Profile]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/schemas/UserProfile'
 *       401:
 *         description: Unauthorized or Token has expired
 *       404:
 *         description: User not found
 *       500:
 *         description: An error occurred while getting user profile
 */
`;
