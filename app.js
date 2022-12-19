var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyparser=require("body-parser");
const session =require("express-session");
const {v4:uuidv4}=require("uuid");
const nocache=require('nocache');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(nocache())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// session Handling

app.use(session({
  secret:uuidv4(),
  resave:true,
  saveUninitialized:false
}));

app.use('/', indexRouter);
// app.use('/users', usersRouter);

//home route
app.get('/',(req,res)=>{
  if(req.session.user==null){
  res.render('index',{title:"Login Form"})
  }else{
      res.render('dashboard');
  }
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
