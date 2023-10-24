var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
  

  var x = 0;

  if(req.query.x === undefined){
    x = (Math.random().toFixed(2));
  }else{
    x = req.query.x;
  }

  var sign = Math.sign(x);
  var tanh = Math.tanh(x);
  var pow = Math.pow(x, x);
  var trunc = Math.trunc(x);

  res.send(`sign applied to ${x} is ${sign}. tanh applied to ${x} is ${tanh}. pow applied to ${x} is ${pow}.
   trunc applied to ${x} is ${trunc}`);

});

module.exports = router;
