"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jwtMiddleware_1 = __importDefault(require("../../middleware/auth/jwtMiddleware"));
const updatePasswordSchema_1 = __importDefault(require("../../schemas/update/updatePasswordSchema"));
const changePasswordController_1 = __importDefault(require("../../controller/password/changePasswordController"));
const checkBlackListMiddleware_1 = __importDefault(require("../../middleware/auth/checkBlackListMiddleware"));
const changePasswordRoute = express_1.default.Router();
changePasswordRoute.put('/', checkBlackListMiddleware_1.default, jwtMiddleware_1.default, updatePasswordSchema_1.default, changePasswordController_1.default);
exports.default = changePasswordRoute;
