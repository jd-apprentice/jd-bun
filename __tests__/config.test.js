import { describe, it, expect, beforeAll } from 'bun:test';
import { config } from '#config';

describe('config object', () => {

    beforeAll(() => {
        process.env.TURSO_URL = 'http://localhost:8080';
        process.env.TURSO_DB_TOKEN = '123456';
    });

    it('should have a db property', () => {
        expect(config).toHaveProperty('db');
    });

    it('should have a db.url property', () => {
        expect(config.db).toHaveProperty('url');
    });

    it('should have a db.authToken property', () => {
        expect(config.db).toHaveProperty('authToken');
    });

});