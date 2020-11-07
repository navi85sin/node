const mongoose = require('mongoose');

var peopleSchema = new mongoose.Schema({
    PeopleName : {
        type : String,
        required : 'Required'
    },
    PeopleLastName : {
        type : String,
        required : 'Required'
    }
})
var PeopleData = mongoose.model("PeopleData", peopleSchema);

module.exports = PeopleData;