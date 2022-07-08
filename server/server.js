const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const createError = require('http-errors');
const jwt = require("jsonwebtoken");
const mongoose = require("./config/database.js");

const users = require("./routes/users.js")
const movies = require("./routes/movies.js")

const app = express();

app.set('secretKey', 'nodeRestApi')

mongoose.connection.on('error', console.error.bind(console,
  'MongoDB connection error:'))

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json(
    { title: "something" }
  )
})

app.use('/users', users)
app.use('/movies', movies)

function validateUser(req, res, next) {
  jwt.verify(req.headers['x-access-token'],
    req.app.get('secretKey'), (err, decoded) => {
      if (err) res.json({ status: "error", message: err.message, data: null });
      else {
        req.body.userId = decoded.id;
        next();
      }
    })
}

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