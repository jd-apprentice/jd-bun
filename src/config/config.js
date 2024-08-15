/**
 * Configuration file for the application.
 */
export const config = {
  app: {
    name: process.env.npm_package_name,
    version: process.env.npm_package_version,
  },
  db: {
    url: process.env.TURSO_URL,
    authToken: process.env.TURSO_DB_TOKEN,
  },
  sentry: {
    dsn: process.env.SENTRY_DSN,
    tracesSampleRate: Number(process.env.SENTRY_TRACES_SAMPLE_RATE) || 1.0,
    env: process.env.SENTRY_ENVIRONMENT,
  }
};
