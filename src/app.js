var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ECT = require('ect');
var ectRenderer = ECT({ watch: true, root: path.join(__dirname, '/views'), ext : '.ect' });

var index = require('./routes/index');
const Router = require('./routes');
const EnvConfiguration = require('./config/env_configuration');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


Router.configure(app);
EnvConfiguration.load();

app.set('port', 3000);
app.set('host', 'localhost');

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ect');
app.engine('ect', ectRenderer.render);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/dist', express.static(path.join(__dirname, '../dist')));
// app.use(express.static(path.join(__dirname, '../../public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  let message = err.message;
  let error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {message: message, error: error });
});

module.exports = app;

app.listen(app.get('port'), app.get('host'));

console.log('Listening at http://localhost:3000');