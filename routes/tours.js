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

module.exports = router;