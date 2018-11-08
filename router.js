var express = require('express');
var router = express.Router();
var functions = require('./functions');

router.use(function logging(req,res,next) {
  next();
});

router.get('/',function (req,res,next) {
  res.send('Root says Hello');

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


router.get('/date',function (req,res) {

  res.send(functions.date().toString());

});

router.get('/suchen', function (req,res) {

  res.redirect('https://www.google.de/?hl=de');

})

router.get('/cookie' , function (req,res) {
  res.send(req.cookies);
})

router.get('/text/:string',function (req,res,next) {

  res.send('String ist : ' + req.params.string);

});

router.get('/speichern/:text', function (req,res,next) {
  res.send(req.params.text + 'gespeichert ! ');
  functions.speichern(req.params.text);
});

router.get('/lesen/:name',function (req,res,next) {
  res.send(functions.lesen(req.params.name));
});



module.exports = router;
