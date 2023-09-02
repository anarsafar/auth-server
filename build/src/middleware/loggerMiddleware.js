"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = (req, res, next) => {
    console.log(`Incoming - Method: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
    res.on('finish', () => {
        console.log(`Incoming - Method: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] `);
    });
    next();
};
exports.default = logger;
