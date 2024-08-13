import { Kysely } from 'kysely';
import { LibsqlDialect } from '@libsql/kysely-libsql';
import { config } from 'src/config/config';

/**
 * Install the turso-cli and create the database using the command:
 * `turso db create <database-name>`
 * 
 * To obtain the auth token, use the command:
 * `turso db tokens create <database-name>`
 * 
 * To obtain the database URL, use the command:
 * `turso db show <database-name>`
 */
export const db = new Kysely({
  dialect: new LibsqlDialect({
    url: config.db.url,
    authToken: config.db.authToken,
  }),
});
