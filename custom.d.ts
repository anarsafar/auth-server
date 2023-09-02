declare namespace NodeJS {
    interface ProcessEnv {
        JWT_ACCESS_SECRET: string;
        JWT_REFRESH_SECRET: string;
        MONGO_USERNAME: string;
        MONGO_PASSWORD: string;
        DB_NAME: string;
        JWT_ACCESS_SECRET: string;
        JWT_REFRESH_SECRET: string;
        FIREBASE_API: string;
        AUTH_DOMAIN: string;
        PROJECT_ID: string;
        STORAGE_BUCKET: string;
        SENDER: string;
        APP_ID: string;
        MAIL_USERNAME: string;
        OAUTH_CLIENTID: string;
        OAUTH_CLIENT_SECRET: string;
        OAUTH_REFRESH_TOKEN: string;
        OAUTH_ACCESS_TOKEN: string;
        OAUTH_CLIENTID_PASSPORT: string;
        OAUTH_CLIENT_SECRET_PASSPORT: string;
        FACEBOOK_APP_ID: string;
        FACEBOOK_APP_SECRET: string;
        GITHUB_APP_ID: string;
        GITHUB_APP_SECRET: string;
        AUTH_SERVER_URL: string;
        SCHEDULE_CONFIG: string;
    }
}
