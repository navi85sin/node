const express = require("express")
const mysql = require("mysql")

const DBRouter = express.Router()

const Mysql = require("../config")


DBRouter.get('/db-people', (req, res) => {
  Mysql.query('SELECT * FROM people', function (err, result, fields) {
    if (err) throw err;
    console.log(fields);
    res.json(result);
    res.end();
    });
})

DBRouter.post('/db-people/add', (req, res) => {
    console.log(req.body);
    if(req.body && req.body.name) {
      let records = [[req.body.name, req.body.lastname]];

      Mysql.query('INSERT INTO people ( name, lastname) VALUES ?', [records], (err, result, fields) => {
        if (err) throw err;
        console.log(`row is added to table ${req.body.name}`);
    })


    }
    Mysql.query('SELECT * FROM people', function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.json(result);
      res.end();
      });
  })

module.exports = DBRouter;