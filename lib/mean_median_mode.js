var fs = require('fs');
var path = require('path');

var MeanMedianMode = function() {
fs.readdir(process.argv, function(err, list){
  if (err) {
    console.log(err);
  }
    function total(){
      var tot = 0;
    list.forEach(function(data){
      tot += data;
      return tot;
      });
    }

    function mean (list){
      return tot/ list.length;
    }

    function median (list){
      var medianer = 0;
      var index = 0;
      var newlist = list.sort(function(a, b) {
      return a - b;
      });
      index = newlist.length/2;
      var round = Math.round(index);
      console.log(newlist);
      if (index % 2 !== 0){
        medianer = newlist[round -1];
        return medianer;
      }
      else {
        medianer = (newlist[index] + newlist[index - 1])/ 2;
        return medianer;
      }
      }
      function mode (list){
        var moder = [];
        var bucket = [];
        list.forEach(function(data){
          moder.push(data);
          for (i = 0; i<moder.length; i++){
          if (data === moder[i]) {
            bucket.push(data);
          }
          }
        });
        return bucket;
      }
  });
};

var mmm = new MeanMedianMode();
module.exports = mmm;
