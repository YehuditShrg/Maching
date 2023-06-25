
const mongoose = require('mongoose');

//return null
const Schema = mongoose.Schema;
const teamsSchema =  new Schema({
    ID:{
        type: Number,
        required: true,
        unique : true
    }, 
    goal: {
        type: Number
    }, 
    name:{
        type: String
    }
})
const Team = mongoose.model('Teams', teamsSchema);

module.exports = { Team };