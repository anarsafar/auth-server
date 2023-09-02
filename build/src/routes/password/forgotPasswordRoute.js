"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const forgotPasswordController_1 = __importDefault(require("../../controller/password/forgotPasswordController"));
const forgotPasswordSchema_1 = __importDefault(require("../../schemas/forgotPasswordSchema"));
const forgotPasswordRouter = express_1.default.Router();
forgotPasswordRouter.post('/', forgotPasswordSchema_1.default, forgotPasswordController_1.default);
exports.default = forgotPasswordRouter;
