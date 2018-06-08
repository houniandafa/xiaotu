var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/login', function(req, res, next) {
   console.log('前端发送的login的数据是')
   console.log(req.body)
});

router.get('/api', function(req, res, next) {
   res.json({
   	name:'xiao hua gou',
   	height: 125
   })
});

module.exports = router;
