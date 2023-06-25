module.exports = function (err, req, res) {
    console.log(err);
    res.status(500).send('🏳 קרתה תקלה בלתי צפויה. \nנשתדל לחזור בתשובה בהקדם');
}