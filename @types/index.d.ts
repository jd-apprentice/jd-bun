declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            TURSO_URL: string;
            TURSO_DB_TOKEN: string;
        }
    }
}

export { };