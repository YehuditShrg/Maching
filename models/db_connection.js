const database = require('mime-db');
const mongoose = require('mongoose');

async function connect() {
    const connString = process.env.DATABASE_URL;
    await mongoose.connect(
        connString);
    console.log('connected successfully');
}

module.exports = { connect }
