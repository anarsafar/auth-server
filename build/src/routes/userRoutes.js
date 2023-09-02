"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jwtMiddleware_1 = __importDefault(require("../middleware/auth/jwtMiddleware"));
const getUserController_1 = __importDefault(require("../controller/getUserController"));
const updateUserController_1 = __importDefault(require("../controller/updateUserController"));
const updateUserSchema_1 = __importDefault(require("../schemas/update/updateUserSchema "));
const checkBlackListMiddleware_1 = __importDefault(require("../middleware/auth/checkBlackListMiddleware"));
const uploadImage_1 = require("../middleware/uploadImage");
const router = express_1.default.Router();
router.get('/', checkBlackListMiddleware_1.default, jwtMiddleware_1.default, getUserController_1.default);
router.put('/', checkBlackListMiddleware_1.default, jwtMiddleware_1.default, uploadImage_1.uploadImage, updateUserSchema_1.default, updateUserController_1.default);
exports.default = router;
