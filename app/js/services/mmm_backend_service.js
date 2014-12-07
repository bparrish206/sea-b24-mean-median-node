"use strict";
module.exports = function(app) {
  var handleErrors = function(data) {
    console.log(data);
  };

  app.factory('mmmBackend', ['$http', function($http) {
    return {
      calc: function(nums, $scope) {
        $http({
          method: "POST",
          url: "/",
          data:nums
        })
        .success(function(data) {
          $scope.mmm.mean = data.Mean;
          $scope.mmm.median = data.Median;
          $scope.mmm.mode = data.Mode;
        })
        .error(handleErrors);
      }
    };
  }]);
};
