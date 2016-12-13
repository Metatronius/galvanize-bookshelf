/*                                                                **
** Created by: Paul Lederer                                       **
** Date Created: 12/12/2016                                       **
** Description: Knex migration file for creating the books table. **
**                                                                */
exports.up = (knex) =>
{
  return knex.schema.createTable('books', (table) =>
  {
    // id
    table.increments();
    // title
    table.string('title').notNullable().defaultTo('');
    // author
    table.string('author').notNullable().defaultTo('');
    // genre
    table.string('genre').notNullable().defaultTo('');
    // description
    table.text('description').notNullable().defaultTo('');
    // cover_url
    table.text('cover_url').notNullable().defaultTo('');
    // created_at and updated_at
    table.timestamps(true, true);
  });
};

exports.down = (knex) =>
{
  return knex.schema.dropTable('books');
};
