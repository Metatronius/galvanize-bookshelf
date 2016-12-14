'use script';

const express = require('express');
const knex = require('../knex');
// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/books', (req, res) =>
{
  knex('books')
        .select('id', 'title', 'description')
        .groupBy('id')
        .then((result) =>
{
          res.send(result);
        })
œ
});

router.get('/books/:id', (req, res) =>
{
  const id = req.params.id;
  knex('books')
        .where({
          id,
        })
        .first()
        .then((result) =>
{
          res.send(result);
        })
        .catch((err) =>
{
          console.error(err);
          process.exit(1);
        });
});

router.post('/books', (req, res) =>
{
  knex('books')
        .insert({
          title: req.body.title,
          author: req.body.author,
          genre: req.body.genre,
          description: req.body.description,
          coverUrl: req.body.cover_url,
        }, '*')
        .then((result) =>
{
          res.send(result[0]);
        })
        .catch((err) =>
{
          console.error(err);
          process.exit(1);
        });
});

router.patch('/books/:id', (req, res) =>
{
  knex('books')
        .update({
          title: req.body.title,
          author: req.body.author,
          genre: req.body.genre,
          description: req.body.description,
          coverUrl: req.body.cover_url,
        }, '*')
        .where('id', req.params.id)
        .then((result) =>
{
          res.send(result[0]);
        })
        .catch((err) =>
{
          console.error(err);
          process.exit(1);
        });
});

router.delete('/books/:id', (req, res) =>
{
  knex('books')
        .del()
        .where('id', req.params.id)
        .then((result) =>
{
          res.send(result[0]);
        })
        .catch((err) =>
{
          console.error(err);
          process.exit(1);
        });
});

module.exports = router;
