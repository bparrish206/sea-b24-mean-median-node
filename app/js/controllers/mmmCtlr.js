"use strict";

module.exports = function(app) {
  app.controller("mmmCtrl", ["$scope", 'mmmBackend', function($scope, mmmBackend) {
    $scope.calc = function() {
      var nums = $scope.mmm.num.split(" ").sort(function(a, b) {return a - b;}).map(Number);
      $scope.mmm.mean = mmmBackend().mean(nums);
      $scope.mmm.median = mmmBackend().median(nums);
      $scope.mmm.mode = mmmBackend().mode(nums);

      $scope.view = 'show';
    };
}]);
};
