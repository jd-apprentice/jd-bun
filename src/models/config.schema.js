import joi from 'joi';

/**
 * Configuration schema
 * @type {import('joi').Schema}
 * @property {Object} db - Database configuration
 * @property {string} db.url - Database URL
 * @property {string} db.authToken - Database authentication token
 * @property {Object} sentry - Sentry configuration
 * @property {string} sentry.dsn - Sentry DSN
 * @property {number} sentry.tracesSampleRate - Sentry traces sample rate
 * @property {string} sentry.env - Sentry environment
 */
export const configSchema = joi.object({
    app: joi.object({
        name: joi.string().optional(),
        version: joi.string().optional(),
    }),
    db: joi.object({
        url: joi.string().required(),
        authToken: joi.string().required(),
    }),
    sentry: joi.object({
        dsn: joi.string().required(),
        tracesSampleRate: joi.number().required(),
        env: joi.string().required(),
    }),
}).required();
