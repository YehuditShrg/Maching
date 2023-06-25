const mongoose = require('mongoose');

const fundRaiserSchema = mongoose.Schema({
    ID:{
        type: Number,
        required: true,
        unique : true
    }, 
    name:{
        type: String
    }, 
    teamID: {
        type: Number
    }, 
    gaol:{
        type: Number
    }
    // ,
    // achievement:{
    //     type: Number
    // }
        
})
const FundRaiser = new mongoose.model('FundRaisers', fundRaiserSchema);

module.exports = { FundRaiser };