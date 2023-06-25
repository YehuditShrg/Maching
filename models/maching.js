const mongoose = require('mongoose');

const machingSchema = mongoose.Schema({
    ID: {
        type: Number,
        required: true,
        unique: true
    },
    name: { type: String },
    targetDate: { type: Date },
    gaol: { type: Number }
})
const Maching = new mongoose.model('maching', machingSchema);

module.exports = { Maching };