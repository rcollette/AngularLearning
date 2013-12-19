/// <reference path="typings/requirejs/require.d.ts" />
"use strict";
require.config({
    baseUrl: 'scripts/app',
    paths: {
        angular: '../angular/angular',
        angularRoutes: '../angular/angular-route',
        angularAnimate: '../angular/angular-animate',
        jquery: '../jquery/jquery-1.10.2.min'
    },
    shim: {
        angular: { 'exports': 'angular', deps: ['jquery'] },
        angularRoutes: { deps: ['angular'] },
        angularAnimate: { deps: ['angular'] },
        angularMocks: { deps: ['angular'], 'exports': 'angular.mock' },
        jquery: { exports: '$' },
        app: { deps: ['angular', 'angularRoutes'] }
    },
    priority: [
        "angular"
    ]
});

require([
    'angular',
    'angularRoutes',
    'angularAnimate',
    'PartialPageController',
    'PartialPage1Controller',
    'PartialPage2Controller',
    'app',
    'appRoutes',
    'MasterController'
], function (angular) {
    $(document).ready(function () {
        var $html = $('html');
        angular.bootstrap($html, ['LearningApp']);

        // More info: https://groups.google.com/forum/#!msg/angular/yslVnZh9Yjk/MLi3VGXZLeMJ
        $html.addClass('ng-app');
    });
});
//# sourceMappingURL=main.js.map
