var express = require('express');
var router = express.Router();
var mainPageData = require('../data/indexdata.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', mainPageData);
});

router.get('/homepage', function(req, res, next) {
  res.render('homepage', mainPageData);
});

router.get('/test/:id', function(req, res, next) {
  res.render('test', {output: req.params.id});
});

module.exports = router;
