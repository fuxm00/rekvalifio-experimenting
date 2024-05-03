/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async function (knex) {
    await knex.schema.createTable('orders', (table) => {
        table.increments('id')

        table.boolean('archived').notNullable().defaultTo(false)

        table.integer('courseId').notNullable()
        table.foreign('courseId').references('courses.id')
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async function (knex) {
    await knex.schema.dropTable('orders')
}