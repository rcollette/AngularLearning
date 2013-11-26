/// <reference path="../typings/angular/angular.d.ts" />
/// <reference path="app.ts" />
"use strict";
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.
        when('#/partialPageView1', { template: 'page 1', controller: null }).
        when('#/partialPageView1', { template: 'page 2', controller: null }).
        otherwise({ redirectTo: 'HTMLPage1' });
    $locationProvider.html5Mode(true);
}]);