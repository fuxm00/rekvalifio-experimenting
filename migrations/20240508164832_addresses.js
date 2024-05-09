/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async function (knex) {
    await knex.schema.createTable('addresses', (table) => {
        table.increments('id')

        table.string('city').notNullable()
        table.string('street').notNullable()
        table.string('postal').notNullable()
        table.string('ic')
        table.string('dic')
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async function (knex) {
    await knex.schema.dropTable('addresses')
}