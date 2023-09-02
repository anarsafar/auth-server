"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const resetPasswordController_1 = __importDefault(require("../../controller/password/resetPasswordController"));
const resetSchema_1 = __importDefault(require("../../schemas/resetSchema"));
const resetPasswordRouter = (0, express_1.Router)();
resetPasswordRouter.get('/:token', resetPasswordController_1.default.showResetPage);
resetPasswordRouter.post('/:token', resetSchema_1.default, resetPasswordController_1.default.resetPassword);
exports.default = resetPasswordRouter;
