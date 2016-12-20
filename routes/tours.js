var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Tour = require('../models/Tour.js');

/* GET /tours 行程列表 */
router.get('/', function(req, res, next) {
  Tour.find(function (err, tours) {
    if (err) return next(err);
    res.json(tours);
  });
});

/* POST /tours 單筆新增行程 */
router.post('/', function(req, res, next) {
  Tour.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /tours/id 單筆檢視行程 */
router.get('/:id', function(req, res, next) {
  Tour.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;