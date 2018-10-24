var express = require('express');
var router = express.Router();
var functions = require('./functions');

router.use(function logging(req,res,next) {
  next();
})

router.get('/',function (req,res,next) {
  res.send('Router says Hello');

});

router.get('/:string',function (req,res,next) {
  res.send('String ist : ' + req.params.string);
});

router.get('/invert/:string', function (req,res,next) {

    res.send(functions.invert(req.params.string));
});

router.get('/double/:zahl',function (req,res,next) {
  res.send(functions.double(req.params.zahl).toString());
});

router.get('/square/:zahl',function (req,res,next) {
  res.send(functions.square(req.params.zahl).toString());
});



module.exports = router;
