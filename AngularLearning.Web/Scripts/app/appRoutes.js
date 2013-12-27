define(["require", "exports", "app"], function(require, exports, __app__) {
    /// <reference path="../typings/angular/angular.d.ts" />
    "use strict";
    var app = __app__;

    var AppRoutes;
    (function (AppRoutes) {
        function resolve(controllerName) {
            var result = { deps: deferredController([controllerName]) };
            return result;
        }

        function deferredController(modules) {
            var x = function ($q, $rootScope) {
                var deferred = $q.defer();
                require(modules, function () {
                    //all dependencies have been resolved so resolve the promise.
                    $rootScope.$apply(function () {
                        deferred.resolve();
                    });
                });
                return deferred.promise;
            };
            return x;
        }

        app.app.config([
            '$routeProvider',
            '$locationProvider',
            function ($routeProvider, $locationProvider) {
                $routeProvider.when('/partialPageView1', {
                    templateUrl: 'partials/partial1.htm',
                    controller: 'PartialPage1Controller as m',
                    resolve: resolve('PartialPage1Controller')
                }).when('/partialPageView2', {
                    templateUrl: 'partials/partial2.htm',
                    controller: 'PartialPage2Controller as m',
                    resolve: resolve('PartialPage2Controller')
                }).otherwise({ redirectTo: '/partialPageView1' });
                //$locationProvider.html5Mode(true);
            }
        ]);
    })(AppRoutes || (AppRoutes = {}));
});
//# sourceMappingURL=appRoutes.js.map
