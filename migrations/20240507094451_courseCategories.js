/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async function (knex) {
    await knex.schema.createTable('courseCategories', (table) => {
        table.increments('id')

        table.string('title').notNullable()

        table.string('content').notNullable()

        table.integer('typeId').notNullable()
        table.foreign('typeId').references('id').inTable('courseType')
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async function (knex) {
    await knex.schema.dropTable('courseCategories')
}