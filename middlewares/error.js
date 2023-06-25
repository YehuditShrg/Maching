module.exports = function (err, req, res, next) {
    // console.log(err);
    res.status(500).send('🏳 קרתה תקלה בלתי צפויה. \nנשתדל לחזור בתשובה בהקדם');
}

// function error(err, req, res) {
//     console.log(err);
//     log
//     res.status(500).send('🏳 קרתה תקלה בלתי צפויה. \nנשתדל לחזור בתשובה בהקדם');
// }

// module.exports = { error }
