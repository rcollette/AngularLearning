/// <reference path="../typings/angular/angular.d.ts" />
"use strict";
import app = require("app");

app.app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.
        when('/partialPageView1', { templateUrl: 'partials/partial1.htm', controller: 'PartialPage1Controller as m' }).
        when('/partialPageView2', { templateUrl: 'partials/partial2.htm', controller: 'PartialPage2Controller as m' }).
        otherwise({ redirectTo: '/partialPageView1' });
    //$locationProvider.html5Mode(true);
}]);