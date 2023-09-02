"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logError = (req, res, next) => {
    const errorMessage = new Error('Request not found');
    console.error(errorMessage);
    res.status(404).json({
        error: errorMessage.message
    });
    next();
};
exports.default = logError;
