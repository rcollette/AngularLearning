define(["require", "exports"], function(require, exports) {
    // <reference path="../typings/angular/angular.d.ts" />
    "use strict";
    var angular = require('angular');
    require('angularRoutes');
    angular.module('learningFactory', []);
    angular.module('learningDirective', []);
    angular.module('learningService', []);
    angular.module('learningFilter', []);
    exports.app = angular.module('learningApp', [
        'ngRoute',
        'ngAnimate',
        'learningFactory',
        'learningDirective',
        'learningService',
        'learningFilter'
    ]).config(function ($routeProvider, $controllerProvider, $provide, $logProvider) {
        // keep global reference to providers so that we can implement dynamic loading of controllers.
        // see: http://ify.io/lazy-loading-in-angularjs/
        exports.app.ControllerProvider = $controllerProvider;
        exports.app.RouteProvider = $routeProvider;
        exports.app.Provide = $provide;
        exports.app.LogProvider = $logProvider;

        //Cannot seem to get debug login enabled.
        $logProvider.debugEnabled(true);
    });
});
//# sourceMappingURL=app.js.map
