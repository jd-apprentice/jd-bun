import * as Sentry from "@sentry/bun";
import { describe, it, expect, mock, jest } from 'bun:test';
import { sentryInit } from "src/config/sentry";

describe("sentryInit", () => {
    it("should initialize the Sentry SDK with the correct configuration", () => {

        mock.module("@sentry/bun", () => {
            return {
                init: jest.fn(),
                setTag: jest.fn(),
                setUser: jest.fn(),
                bunServerIntegration: jest.fn(),
            }
        });

        const config = {
            sentry: {
                env: "production",
                dsn: "123",
                tracesSampleRate: 0.5,
            },
            app: {
                name: "your-app-name",
                version: "1.0.0",
            },
        };

        sentryInit({
            sentry: config.sentry,
            app: config.app
        });

        expect(Sentry.init).toHaveBeenCalledWith({
            dsn: config.sentry.dsn,
            environment: config.sentry.env,
            tracesSampleRate: config.sentry.tracesSampleRate,
            integrations: [Sentry.bunServerIntegration()],
            release: `${config.app.name}@${config.app.version}`,
        });

        expect(Sentry.setTag).toHaveBeenCalledWith("app", config.app.name);
        expect(Sentry.setTag).toHaveBeenCalledWith("version", config.app.version);
        expect(Sentry.setUser).toHaveBeenCalledWith({ id: "1", username: "sample_user" });
    });
});