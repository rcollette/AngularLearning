define(["require", "exports"], function(require, exports) {
    // <reference path="../typings/angular/angular.d.ts" />
    "use strict";
    var angular = require('angular');
    var route = require('angularRoutes');
    exports.app = angular.module('LearningApp', ['ngRoute', 'ngAnimate']);
    exports.app.config(function ($routeProvider, $controllerProvider, $provide, $logProvider) {
        // keep global reference to providers so that we can implement dynamic loading of controllers.
        // see: http://ify.io/lazy-loading-in-angularjs/
        exports.app.ControllerProvider = $controllerProvider;
        exports.app.RouteProvider = $routeProvider;
        exports.app.Provide = $provide;
        exports.app.LogProvider = $logProvider;

        //Cannot seem to get debug loggin enabled.
        $logProvider.debugEnabled(true);
    });
});
//# sourceMappingURL=app.js.map
