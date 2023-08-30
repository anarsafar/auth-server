declare namespace NodeJS {
    interface ProcessEnv {
        JWT_ACCESS_SECRET: string;
        JWT_REFRESH_SECRET: string;
        MONGO_USERNAME: string;
        MONGO_PASSWORD: string;
    }
}
