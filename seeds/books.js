/*                                                                            **
** Created by: Paul Lederer                                                   **
** Date Created: 12/12/2016                                                   **
** Description: Knex seed file for seeding the books table.                   **
**                                                                            */

// Imports the object from config/books.js
const data = require('../config/books.js');

exports.seed = (knex, Promise) =>
{
  // Deletes ALL existing entries
  return knex('books').del()
    .then(() =>
    {
      return Promise.all([
        // Inserts seed entries
        knex('books').insert(data.books),
      ]);
    });
};
