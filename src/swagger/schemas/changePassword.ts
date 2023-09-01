export const schemaSwagger = `
/**
 * @swagger
 * components:
 *   schemas:
 *     ChangePasswordRequest:
 *       type: object
 *       properties:
 *         currentPassword:
 *           type: string
 *           minLength: 8
 *           pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])"
 *         newPassword:
 *           type: string
 *           minLength: 8
 *           pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])"
 *       required:
 *         - currentPassword
 *         - newPassword
 */
`;
