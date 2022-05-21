// var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

//  router
// var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let postsRouter = require('./routes/posts');

var app = express();
require('./connections');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/posts', postsRouter);
app.use('/users', usersRouter);
// app.use('/posts', postsRouter);

// app.use(function(req, res, next) {
//   next(createError(404));
// });

module.exports = app;
