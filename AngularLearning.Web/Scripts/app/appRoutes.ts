/// <reference path="../typings/angular/angular.d.ts" />
/// <reference path="app.ts" />
"use strict";
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.
        when('partialPageView1', { template: 'partials/partial1.htm', controller: null }).
        when('partialPageView2', { template: 'partials/partial2.htm', controller: null }).
        otherwise({ redirectTo: 'HTMLPage1.htm' });
    $locationProvider.html5Mode(true);
}]);