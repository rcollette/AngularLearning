define(["require", "exports", "app"], function(require, exports, __app__) {
    /// <reference path="../typings/angular/angular.d.ts" />
    "use strict";
    var app = __app__;

    app.app.config([
        '$routeProvider',
        '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $routeProvider.when('/partialPageView1', { templateUrl: 'partials/partial1.htm', controller: 'PartialPage1Controller as m' }).when('/partialPageView2', { templateUrl: 'partials/partial2.htm', controller: 'PartialPage2Controller as m' }).otherwise({ redirectTo: '/partialPageView1' });
            //$locationProvider.html5Mode(true);
        }
    ]);
});
//# sourceMappingURL=appRoutes.js.map
