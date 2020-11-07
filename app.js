const express = require("express")
const BodyPraser = require("body-parser")
const mysql = require("mysql")


const Router = require("./router/router.js")
const dbPeople = require("./db-people/db-people.js")
const Mysql = require("./config.js")
const App = express()

App.use(BodyPraser.urlencoded({ extended: true }));
App.use(BodyPraser.json());

App.use('/', dbPeople);
App.use('/people', Router);

App.get('/', (req, res) => {
    console.log('we are on main page')
    res.send('here is the main page')
})
 

App.listen(8000, () => {
    console.log('server is started');
})
