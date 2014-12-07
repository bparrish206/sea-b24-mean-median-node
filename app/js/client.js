"use strict";
require('angular/angular');
require('angular-route');

var mmmApp = angular.module('mmmApp', ['ngRoute']);
//services
require('./services/mmm_backend_service.js')(mmmApp);

//controllers
require('./controllers/mmmctlr.js')(mmmApp);

mmmApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '',
    controller:'mmmCtlr'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);
