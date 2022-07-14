const express = require("express");
const createError = require('http-errors');
const logger = require("morgan");
const bodyParser = require("body-parser");
const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.json({message: '707'})
})

// handling errors
app.use(function (req, res, next) {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        error: err.message,
        message: req.app.get('env') === 'development' ? err : {}
    });
});

// running server
app.listen(8080, () => {
    console.log("running on port 8080");
})