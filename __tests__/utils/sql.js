/**
 * @param {import("kysely").Kysely<any>} db
 * @param {string} tableName
 */
export async function createTable(db, tableName) {
    const response = await db.schema
        .createTable(tableName)
        .addColumn('id', 'integer', column => column.primaryKey().autoIncrement())
        .execute();

    return response;
};

/**
 * @param {import("kysely").Kysely<any>} db
 * @param {string} tableName
 */
export async function dropTable(db, tableName) {
    const response = await db.schema
        .dropTable(tableName)
        .execute();

    return response;
}