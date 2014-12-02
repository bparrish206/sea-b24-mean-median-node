"use strict";

var mmm = require('../lib/mean_median_mode');

module.exports = function(app) {
  app.post('/', function(req, res) {
  var num = req.body;
  res.send({
    Mean: mmm.mean(num),
    Median: mmm.median(num),
    Mode: mmm.mode(num)
  });
});
};
