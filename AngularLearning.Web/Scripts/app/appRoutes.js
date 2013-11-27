define(["require", "exports", "app", "PartialPage1Controller", "PartialPage2Controller"], function(require, exports, __app__, __c1__, __c2__) {
    /// <reference path="../typings/angular/angular.d.ts" />
    "use strict";
    var app = __app__;
    var c1 = __c1__;
    var c2 = __c2__;

    app.app.config([
        '$routeProvider',
        '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $routeProvider.when('/partialPageView1', { template: 'partials/partial1.htm', controller: c1.PartialPage1Controller }).when('/partialPageView2', { template: 'partials/partial2.htm', controller: c2.PartialPage2Controller }).otherwise({ redirectTo: '/partialPageView1' });
            $locationProvider.html5Mode(true);
        }
    ]);
});
//# sourceMappingURL=appRoutes.js.map
