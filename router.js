var express = require('express');
var router = express.Router();

router.use(function logging(req,res,next) {
  console.log("Test von use");
  next();
})

router.get('/',function (req,res,next) {
  console.log("Test von get");
  res.send('Router says Hello');

});

router.get('/:string',function (req,res,next) {
  res.send('String ist : ' + req.params.string);
})


module.exports = router;
