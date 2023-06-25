const express = require('express')
// const logger = require('./middlewares/logger');
require('dotenv').config();

const maching = require('./routes/machings');
const teams = require('./routes/teams');
const fundRaisers = require('./routes/fundRaisers');
const donations = require('./routes/donations');

const app = express();

//app.use(express.static('pages'));//127.0.0.1:3000/pages/mySwagger.html

app.use(express.json());

//app.use(logger('begin'));

app.get('/', (req, res) => {
    res.send('<h1>Some Headers</h1>')
})


app.use('/api/maching', maching);
app.use('/api/team', teams);
app.use('/api/fundRaiser', fundRaisers);
// app.use('/api/donation', donations);

//app.use(logger('end'));//will apply this middlware only if the response was not closed before





app.listen(3000, () => {
    console.log('server is up and running')
})