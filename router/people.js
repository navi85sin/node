const express = require('express');

const Router = express.Router();
const mongoose = require('mongoose');
const MCon = require('../config/dbconnection.js')
const PeopleMongoos = mongoose.model('PeopleData');

let people = { people : [{ 'name' : 'navdeep', 'lastname': 'pp'}]};

Router.get('/list', (req, res) => {
    console.log('here is the list of people');

    res.render('index', {'data' : people} );
 //   res.send(`list of people ${JSON.stringify(people)}`);    
})


Router.get('/add', (req, res) => {
    res.render('people-form');
})
 
Router.post('/add-people', (req, res) => {
    console.log('this is post request');
    people.people.push({'name': req.body.firstname, 'lastname': req.body.lastname});
    console.log(people);
   res.redirect('/people/list');
})
 
Router.post('/add-people-db', (req, res) => {
    var pp = new PeopleMongoos();
    pp.PeopleName = req.body.name;
    pp.PeopleLastName = req.body.lastname;

    pp.save((err, doc) => {
        if(err){
            console.log('there is error');
        } else {
            console.log('no error, record added');
        }
    })
    console.log('log is added to db');
    console.log(req.body);
    res.send('added');
})

// EXAMPLES OF CURRING AND ARROW FUNCTIONS
function test(a){
    return function(b){
        return a + b;
    }
}
const test1 = (a, b) => a + b; 
const test2 = (a) => (b) => a + b; 
const exam = test2;
Router.get('/jsexample', (req, res) => {
    console.log(`Simple JS ${test(1)(1)}`);
    console.log(`little short JS ${test1(3, 3)}`);
    console.log(`Curring function example ${test2(2)(4)}`);
    console.log(exam(4)(5));
    console.log('here are the example');
    res.send('here is it');
})
// Clouser, Nested Scope, Hoisting
var foo = 'foo2';
(ctest = (a) => {
    var foo = 'foo1';
    return foo;
})();

Router.get('/clouser', (req, res) => {
    console.log(foo);
    console.log(ctest(3));
    res.send('here is it');

})
module.exports = Router;