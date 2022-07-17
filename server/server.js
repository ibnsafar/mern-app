const express = require("express");
const createError = require('http-errors');
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const movies = require("./api/routes/movies");
const users = require("./api/routes/users");
const {mongoDBURL} = require("./api/config/database");

const app = express();

const validateUser = (req, res, next) => {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function (err, decoded) {
        if (err) {
            res.json({status: "error", message: err.message, data: null});
        } else {
            req.body.userId = decoded.id;
            next();
        }
    });
}

app.set('secretKey', 'nodeRestApi');

app.use('/', users);
app.use('/', validateUser, movies);

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
mongoose.connect(mongoDBURL, (err) => {
    if (err) {
        console.log('Unable to connect to Mongo.');
        process.exit(1);
    } else {
        app.listen(8080, () => {
            console.log("running on port 8080 ");
        })
    }
})