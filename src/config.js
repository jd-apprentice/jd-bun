require('dotenv').config();

export const config = {
  db: {
    url: process.env.TURSO_URL,
    authToken: process.env.TURSO_DB_TOKEN,
  },
};
