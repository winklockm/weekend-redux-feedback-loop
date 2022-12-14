
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// Request body must be a book object with a title and author.
router.post('/', (req, res) => {
    let newFeedback = req.body;
    console.log(`Adding feedback`, newFeedback);
  
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                     VALUES ($1, $2, $3, $4);`;

    let queryValues = [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments];
    pool.query(queryText, queryValues)
      .then(result => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log(`Error adding new feedback`, error);
        res.sendStatus(500);
      });
  });
  
  module.exports = router;
