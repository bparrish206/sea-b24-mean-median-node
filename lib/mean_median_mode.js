"use strict";

var MeanMedianMode = function() {
    this.mean = function(list) {
    var tot = 0;
    list.forEach(function(data) {
    tot += data;
  });
    return tot / list.length;
  };

    this.median = function(list) {
    var medianer = 0;
    var index = 0;
    var newlist = list.sort(function(a, b) {
      return a - b;
    });
    index = newlist.length / 2;
    var round = Math.round(index);
    console.log(newlist);
    if (index % 2 !== 0) {
      medianer = newlist[round - 1
    ];
      return medianer;
    }else {
      medianer = (newlist[index] + newlist[index - 1
      ]) / 2;
      return medianer;
    }
  };

    this.mode = function(list) {
    var bucket = {};
    var max = 0;
    var count = 0;
    list.forEach(function(num) {
      if (bucket[num
    ]) { bucket[num
    ]++; }
      else { bucket[num
      ] = 1; }
      if (count < bucket[num
    ]) {
        max = num;
        count = bucket[num
    ];
      }
    });
    return max;
  };
  };
var mmm = new MeanMedianMode();
module.exports = mmm;
