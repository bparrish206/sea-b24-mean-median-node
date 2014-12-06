"use strict";

require('../../app/js/client');
require('angular-mocks');

describe('mmmCtlr', function() {
  var $controllerConstructor;
  var $httpBackend;
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

  describe('rest request', function() {
    beforeEach(angular.mock.inject(function(_$httpBackend_) {
      $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('make a call to index', function() {
      $httpBackend.expectGET('/').respond(200, [{'num': '4 6 7 8'}]);

      $controllerConstructor('notesCtrl', {$scope: $scope});
      $scope.index();
debugger;
      $httpbackend.flush();

      expect($scope.mmm).toBeDefined();
      expect(Array.isArray($scope.mmm)).toBeTruthy();
      expect(typeof $scope.mmm[0]).toBe('object');
      expect($scope.mmm[0].mmmBody).toBe('1 3 74 9');
    });
});
});
