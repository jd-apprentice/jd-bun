import joi from 'joi';

/**
 * Configuration schema
 * @type {import('joi').Schema}
 * @property {Object} db - Database configuration
 * @property {string} db.url - Database URL
 * @property {string} db.authToken - Database authentication token
 */
export const configSchema = joi.object({
    db: joi.object({
        url: joi.string().required(),
        authToken: joi.string().required(),
    }),
}).required();
