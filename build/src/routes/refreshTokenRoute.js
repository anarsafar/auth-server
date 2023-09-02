"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const refreshTokenController_1 = __importDefault(require("../controller/refreshTokenController"));
const checkBlackListMiddleware_1 = __importDefault(require("../middleware/auth/checkBlackListMiddleware"));
const router = express_1.default.Router();
router.post('/', checkBlackListMiddleware_1.default, refreshTokenController_1.default.refreshToken);
exports.default = router;
