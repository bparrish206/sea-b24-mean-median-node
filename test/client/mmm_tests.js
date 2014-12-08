"use strict";

require('../../app/js/client');
require('angular-mocks');

describe('mmmCtlr', function() {
  var $controllerConstructor;
  var $scope;

  beforeEach(angular.mock.module('mmmApp'));

  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    $controllerConstructor = $controller;
  }));

  it('should be able to create a controller', function() {
    var mmmController = $controllerConstructor('mmmCtrl', {$scope: $scope});
    expect(typeof mmmController).toBe('object');
  });


    it('test simple numbers', function() {
      $controllerConstructor('mmmCtrl', {$scope: $scope});
      $scope.mmm = {};
      $scope.mmm.num = '2 3 2 4';
      $scope.calc();


      expect($scope.mmm.num).toBe('2 3 2 4');
      expect($scope.mmm.mean).toBe(2.75);
      expect($scope.mmm.median).toBe(2.5);
      expect($scope.mmm.mode).toBe(2);
    });
});
