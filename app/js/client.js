"use strict";
require('angular/angular');
require('angular-route');

var mmmApp = angular.module('mmmApp', ['ngRoute']);
//services
require('./services/mmm_backend_service.js')(mmmApp);

//controllers
require('./controllers/mmmctlr.js')(mmmApp);
