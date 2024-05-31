/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async function (knex) {
    await knex.schema.createTable('users', (table) => {
        table.increments('id').primary()

        table.string('name').notNullable().unique()

        table.string('salt').notNullable()

        table.string('hash').notNullable()

        table.boolean('isAdmin').notNullable().defaultTo(false)

        table.string('token')
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async function (knex) {
    await knex.schema.dropTable('users')
}