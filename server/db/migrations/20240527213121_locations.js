/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('locations', (table) => {
    table.string('id').primary()
    table
      .integer('film_id')
      .nullable()
      .references('films.id')
      .onDelete('CASCADE')
    table.string('image_url')
    table.string('description')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('locations')
}
