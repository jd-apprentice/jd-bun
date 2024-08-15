declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            TURSO_URL: string;
            TURSO_DB_TOKEN: string;
            SENTRY_DSN: string;
            SENTRY_ENVIRONMENT: 'development' | 'production';
            SENTRY_TRACES_SAMPLE_RATE: string | number;
        }
    }
}

export { };