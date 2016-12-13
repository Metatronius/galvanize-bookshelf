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
