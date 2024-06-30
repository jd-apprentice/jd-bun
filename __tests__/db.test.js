import { describe, it, expect, beforeAll, afterAll } from 'bun:test';
import { LibsqlDialect } from '@libsql/kysely-libsql';
import { Kysely } from 'kysely';

import { db } from '#db';
import { config } from '#config';
import { createTable, dropTable } from './utils/sql';

describe('db file', () => {

    /** @type { import("kysely").Kysely<any> } */
    let newDb;

    beforeAll(async () => {
        newDb = new Kysely({
            dialect: new LibsqlDialect({
                url: config.db.url,
                authToken: config.db.authToken
            })
        });
    });

    it('should be an instance of Kysely', () => {
        expect(db).toBeInstanceOf(Kysely);
    });

    it('should be an instance of Kysely', () => {
        expect(newDb).toBeInstanceOf(Kysely);
    });

    it('should create a table with the name of users', async () => {
        await createTable(newDb, 'sampleUsers');
        const usersTable = await newDb.selectFrom('sampleUsers').selectAll().execute();
        expect(usersTable).toEqual([]);
    });

    afterAll(async () => {
        await dropTable(newDb, 'sampleUsers');
    });

});

