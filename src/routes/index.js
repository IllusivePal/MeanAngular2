var express = require('express');

var router  = express.Router();

var indexpage = 'index.html';

router.get('/',function(req,res,next){
    res.render(indexpage);
});

module.exports = router;