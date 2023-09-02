"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pingRoutesSwagger = void 0;
exports.pingRoutesSwagger = `
/**
 * @swagger
 * tags:
 *   name: Ping
 *   description: Ping route
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Ping route to check server status
 *     tags: [Ping]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               message: Welcome auth API
 */
`;
