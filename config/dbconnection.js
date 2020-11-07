const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true}, (error) => {
    if(error){
        console.log('mongo db connection fails');
    } else {
        console.log(' monogo db connection works');
    }
});
const PeopleModel = require('../model/people.js');