"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app_1 = require("firebase/app");
const path_1 = __importDefault(require("path"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_config_1 = __importDefault(require("./swagger-config"));
const passport_1 = __importDefault(require("passport"));
const authRoutes_1 = __importDefault(require("./src/routes/authRoutes"));
const confirmationRoute_1 = __importDefault(require("./src/routes/confirmationRoute"));
const userRoutes_1 = __importDefault(require("./src/routes/userRoutes"));
const refreshTokenRoute_1 = __importDefault(require("./src/routes/refreshTokenRoute"));
const forgotPasswordRoute_1 = __importDefault(require("./src/routes/password/forgotPasswordRoute"));
const resetPasswordRoute_1 = __importDefault(require("./src/routes/password/resetPasswordRoute"));
const changePasswordRoute_1 = __importDefault(require("./src/routes/password/changePasswordRoute"));
const loggerMiddleware_1 = __importDefault(require("./src/middleware/loggerMiddleware"));
const logErrorMiddleware_1 = __importDefault(require("./src/middleware/logErrorMiddleware"));
const passportMiddleware_1 = __importDefault(require("./src/middleware/auth/passportMiddleware"));
const config_1 = require("./src/config");
const tokenCleanupService_1 = require("./src/service/tokens/tokenCleanupService");
const router = (0, express_1.default)();
const corsOptions = {
    origin: config_1.config.frontendURL,
    credentials: true,
    allowedHeaders: 'Authorization, Content-Type',
    methods: 'GET,POST,PUT'
};
(0, app_1.initializeApp)(config_1.config.firebaseConfig);
router.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
router.use(express_1.default.urlencoded({ extended: true }));
router.use(express_1.default.json());
router.use((0, cors_1.default)(corsOptions));
router.use((0, cookie_parser_1.default)());
passport_1.default.use(passportMiddleware_1.default.googleStrategy);
passport_1.default.use(passportMiddleware_1.default.facebookStrategy);
passport_1.default.use(passportMiddleware_1.default.githubStrategy);
router.use(passport_1.default.initialize());
router.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_config_1.default));
router.set('view engine', 'ejs');
router.set('views', path_1.default.join(__dirname, 'views'));
router.set('templates', path_1.default.join(__dirname, 'templates'));
mongoose_1.default
    .connect(config_1.config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
    console.log('MongoDB connected successfully');
    startServer();
    (0, tokenCleanupService_1.scheduler)();
})
    .catch((err) => console.error(err));
const startServer = () => {
    router.use(loggerMiddleware_1.default);
    router.get('/', (req, res, next) => res.status(200).json({ message: 'Welcome auth API' }));
    router.use('/auth/', authRoutes_1.default);
    router.use('/confirm-user', confirmationRoute_1.default);
    router.use('/request-reset/', forgotPasswordRoute_1.default);
    router.use('/reset-password', resetPasswordRoute_1.default);
    router.use('/change-password', changePasswordRoute_1.default);
    router.use('/refresh-token', refreshTokenRoute_1.default);
    router.use('/profile/', userRoutes_1.default);
    router.use(logErrorMiddleware_1.default);
    router.listen(config_1.config.server.port, () => console.log(`Server is running on port ${config_1.config.server.port}`));
};
