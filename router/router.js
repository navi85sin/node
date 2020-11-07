const express = require("express")
const BodyPraser = require("body-parser")

const Router = express.Router()

let people = {people : [{'name': 'navdd'}]}
Router.get('/', (req, res) => {
    console.log("here is the router main")
    res.send('here is the router main')
})

Router.post('/add', (req, res) => {
    console.log("here is the router main")
    console.log(req.body);
    people.people.push({'name': req.body.name})
    res.json(people)
    res.send('here is the router main')
})
Router.get('/add-people', (req, res) => {
    res.json(people);
})

Router.post('/manage', (req, res) => {
    res.json(req.body);
})


module.exports = Router;