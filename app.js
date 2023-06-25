const express = require('express')
// const logger = require('./middlewares/logger');
require('dotenv').config();
const errorMW = require('./middlewares/error');

const maching = require('./routes/machings');
const teams = require('./routes/teams');
const fundRaisers = require('./routes/fundRaisers');

const app = express();

//app.use(express.static('pages'));//127.0.0.1:3000/pages/mySwagger.html

app.use(express.json());

//app.use(logger('begin'));

app.get('/', (req, res) => {
    res.send('<h1>Some Headers</h1>')
})

app.use('/api/maching', maching);
app.use('/api/teams', teams);
app.use('/api/fundRaiser', fundRaisers);
app.use(errorMW);

//app.use(logger('end'));//will apply this middlware only if the response was not closed before

app.listen(3000, () => {
    console.log('server is up and running')
})