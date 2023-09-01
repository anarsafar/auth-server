export const forgotPasswordSchemaSwagger = `
/**
 * @swagger
 * components:
 *   schemas:
 *     ForgotPasswordRequest:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *       required:
 *         - email
 */
`;
