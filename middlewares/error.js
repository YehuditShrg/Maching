module.exports = ( (err, request, response, next) =>{
    console.error(err.stack);
    response.status(500).send('🏳 קרתה תקלה בלתי צפויה. \nנשתדל לחזור בתשובה בהקדם');
})

// function error(err, req, res) {
//     console.log(err);
//     log
//     res.status(500).send('🏳 קרתה תקלה בלתי צפויה. \nנשתדל לחזור בתשובה בהקדם');
// }

// module.exports = { error }
