// <reference path="../typings/angular/angular.d.ts" />
"use strict";
var angular = require('angular');
require('angularRoutes');
angular.module('learningFactory', []);
angular.module('learningDirective', []);
angular.module('learningService', []);
angular.module('learningFilter', []);
export var app = angular.module('learningApp', [
    'ngRoute',
    'ngAnimate',
    'learningFactory',
    'learningDirective',
    'learningService',
    'learningFilter']).
    config(function ($routeProvider, $controllerProvider: ng.IControllerProvider, $provide: ng.auto.IProvideService, $logProvider) {
        // keep global reference to providers so that we can implement dynamic loading of controllers.
        // see: http://ify.io/lazy-loading-in-angularjs/
        app.ControllerProvider = $controllerProvider;
        app.RouteProvider = $routeProvider;
        app.Provide = $provide;
        app.LogProvider = $logProvider;
        //Cannot seem to get debug login enabled.
        $logProvider.debugEnabled(true);
    });