/// <reference path="../typings/angular/angular.d.ts" />
"use strict";
import app = require("app");
import c1 = require("PartialPage1Controller");
import c2 = require("PartialPage2Controller");

app.app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.
        when('/partialPageView1', { template: 'partials/partial1.htm', controller: c1.PartialPage1Controller }).
        when('/partialPageView2', { template: 'partials/partial2.htm', controller: c2.PartialPage2Controller }).
        otherwise({ redirectTo: '/partialPageView1' });
    $locationProvider.html5Mode(true);
}]);