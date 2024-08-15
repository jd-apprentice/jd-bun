import { config } from "#config";
import * as Sentry from "@sentry/bun";

/**
 * Initialize the Sentry SDK.
 * @param {Object} configuration - The configuration object.
 * @param {Object} configuration.sentry - The Sentry configuration object.
 * @param {string} configuration.sentry.env - The environment in which the app is running.
 * @param {string} configuration.sentry.dsn - The DSN for the Sentry project.
 * @param {number} configuration.sentry.tracesSampleRate - The traces sample rate.
 * @param {Object} configuration.app - The app configuration object.
 * @param {string | undefined} configuration.app.name - The name of the app.
 * @param {string | undefined} configuration.app.version - The version of the app.
 */
export function sentryInit(configuration) {

    const { sentry, app } = configuration

    const isProduction = sentry.env === "production";

    Sentry.init({
        dsn: sentry.dsn,
        environment: sentry.env || "development",
        tracesSampleRate: sentry.tracesSampleRate, // Tracing 
        integrations: [
            Sentry.bunServerIntegration(), // Bun.Serve integration
        ],
        release: isProduction ? `${app.name}@${app.version}` : undefined,
    });

    Sentry.setTag("app", app.name);
    Sentry.setTag("version", app.version);
    Sentry.setUser({ id: "1", username: "sample_user" }); // Gonna be replaced with actual user data
};
