export const schemaSwagger = `
/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Authentication routes
 *
 * components:
 *   schemas:
 *     SignUpRequest:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *         password:
 *           type: string
 *           minLength: 8
 *           pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])"
 *       required:
 *         - email
 *         - password
 */
`;
