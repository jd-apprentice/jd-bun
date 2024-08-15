import Joi from "joi";
import * as Sentry from "@sentry/bun";
/**
 * Validate the configuration against the schema.
 * @param {Joi.Schema} schema - The schema to validate against.
 * @param {Object} data - The configuration data to validate.
 * @returns {Object} The validated configuration data.
 */
export function validateSchema(schema, data) {
    const { error, value } = schema.validate(data);
    if (error) {
        Sentry.captureException({
            message: "Invalid configuration",
            error,
        });
        throw new Error(`Invalid configuration: ${error.message}`);
    }
    return value;
};
