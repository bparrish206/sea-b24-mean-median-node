"use strict";

module.exports = function(app) {
  app.controller("mmmCtrl", ["$scope", "$http", 'mmmBackend', function($scope, $http, mmmBackend) {
    $scope.calc = function() {
      var nums = $scope.mmm.num.split(" ").sort(function(a, b) {return a - b;}).map(Number);
      mmmBackend.calc(nums, $scope);
    };
  }]);
};
