module.exports = function (err, req, res, next) {
    console.log(err);
    res.status(500).send('🏳 קרתה תקלה בלתי צפויה בחיבור לרשת. \n אנא נסו שנית בעוד מספר רגעים.');
}
