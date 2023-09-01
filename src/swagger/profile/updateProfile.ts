export const updateUserProfileSwagger = `
/**
 * @swagger
 * /profile:
 *   put:
 *     summary: Update user profile information
 *     tags: [Profile]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/schemas/UpdateUserProfile'
 *     responses:
 *       200:
 *         description: User profile updated successfully
 *         content:
 *           application/json:
 *             example:
 *               user: 
 *                 name: John Doe
 *                 email: john@example.com
 *                 bio: "example"
 *                 phone: "example"
 *               message: User updated successfully
 *       400:
 *         description: Bad request, e.g., missing image file
 *       401:
 *         description: Unauthorized or Token has expired
 *       404:
 *         description: User not found
 *       500:
 *         description: An error occurred while updating user profile
 */
`;
