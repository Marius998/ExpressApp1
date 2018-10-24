var express = require('express');
var router = require('./router');
var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());

app.use('/', router);


app.listen(3000, function () {
  console.log("Listening on Port 3000");
})
