var express = require('express');
var router = express.Router();

/* GET home page. */

module.exports = function (db) {

  router.get('/', async function (req, res, next) {
    try {
      const { rows } = await db.query("Select * from todos")
      res.status(200).json(rows)

    } catch (e) {
      throw e
    }
  });

  return router;
}