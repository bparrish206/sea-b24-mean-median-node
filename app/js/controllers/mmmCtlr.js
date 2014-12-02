"use strict";

module.exports = function(app) {
  app.controller('mmmCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.calc = function() {
      var nums = $scope.mmm.num.split(' ').sort(function(a, b) {return a - b;}).map(Number);
      $http({
        method: 'POST',
        url: '/',
        data:nums
      })
      .success(function(data) {
        $scope.mmm.mean = data.Mean;
        $scope.mmm.median = data.Median;
        $scope.mmm.mode = data.Mode;
      })
      .error(function(data) {
        console.log(data);
      });
    };
  }]);
};
