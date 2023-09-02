export const resetPasswordSchemaSwagger = `
/**
 * @swagger
 * components:
 *   schemas:
 *     ResetPasswordRequest:
 *       type: object
 *       properties:
 *         password:
 *           type: string
 *           minLength: 8
 *           pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])"
 *       required:
 *         - password
 */
`;
