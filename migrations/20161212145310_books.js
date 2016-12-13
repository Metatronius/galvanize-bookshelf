/*                                                                **
** Created by: Paul Lederer                                       **
** Date Created: 12/12/2016                                       **
** Description: Knex migration file for creating the books table. **
**                                                                */
exports.up = (knex) =>
{
  return knex.schema.createTable('books', (table) =>
  {
    table.increments();
    table.string('title').notNullable().defaultTo('');
    table.string('author').notNullable().defaultTo('');
    table.string('genre').notNullable().defaultTo('');
    table.text('description').notNullable().defaultTo('');
    table.text('cover_url').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = (knex) =>
{
  return knex.schema.dropTable('books');
};
