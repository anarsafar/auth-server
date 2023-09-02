"use strict";
// authRoutesSwagger.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutesSwagger = void 0;
exports.authRoutesSwagger = `
/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Authentication routes
 */

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: User registration
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/schemas/loginAndSignup'
 *           examples:
 *             example-1:
 *               value:
 *                 email: user@example.com
 *                 password: MySecurePassword123!
 *             example-2:
 *               value:
 *                 email: ""
 *                 password: ""
 *             example-3:
 *               value:
 *             example-4:
 *               value:
 *                 email: invalid-email-format
 *                 password: InvalidPassword
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               message: Check email inbox for confirmation link
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             examples:
 *               validation-error-1:
 *                 value:
 *                   error: Please enter a valid email address
 *               validation-error-2:
 *                 value:
 *                   error: Password must include uppercase, lowercase, number and at least one symbol
 *               validation-error-3:
 *                 value:
 *                   error: Email is required
 *               validation-error-4:
 *                 value:
 *                   error: Password is required
 *       409:
 *         description: Email already exists
 *         content:
 *           application/json:
 *             example:
 *               error: Email already exists
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: An error occurred during sign up
 */
`;
