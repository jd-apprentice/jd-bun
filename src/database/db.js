import { Kysely } from 'kysely';
import { LibsqlDialect } from '@libsql/kysely-libsql';
import { config } from 'src/config/config';

export const db = new Kysely({
  dialect: new LibsqlDialect({
    url: config.db.url,
    authToken: config.db.authToken,
  }),
});
