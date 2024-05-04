/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async function (knex) {
    await knex.schema.createTable('orders', (table) => {
        table.increments('id')

        table.boolean('archived').notNullable().defaultTo(false)

        table.timestamp('created_at').defaultTo(knex.fn.now());

        table.integer('courseId').notNullable()
        table.foreign('courseId').references('id').inTable('courses')
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async function (knex) {
    await knex.schema.dropTable('orders')
}