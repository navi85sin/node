const express = require('express');
const BodyPraser = require('body-parser');
const expressHandlebars =  require('express-handlebars');
const path = require('path');

const Router = require('./router/people.js');
const MongoConnect = require('./config/dbconnection.js');

const app = express();
app.use(BodyPraser.urlencoded({ extended: true }));
app.use(BodyPraser.json());

app.set('views', path.join(__dirname, '/views/'));

app.engine('hbs', expressHandlebars({
    extname : 'hbs',
    defaultLayout : "mainlayout",
    layoutDir : __dirname + '/views/layouts'
}));


app.set('view engine', 'hbs');

app.use('/people', Router);

app.get('/test', (req, res) => {
    res.render('index');
})


app.listen('4000', () => {
    console.log('server is started');
})
