var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mysql      = require('mysql');
const cors = require('cors');

var todoRouter = require('./router/todo');

var app = express();

app.set('trust proxy', true);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(cookieParser());
app.use(cors());

app.use('/todo', todoRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.listen(3000, function() {
    console.log("start! express server on port 3000")
})

process.on('unhandledRejection', (err, promise) => {
  console.log('Unhandled Rejection detect:', err.stack || err)
})

module.exports = app;
