/// <reference path="typings/requirejs/require.d.ts" />
"use strict";
require.config({
    baseUrl: 'scripts/app',
    paths: {
        angular: '../angular/angular',
        angularRoutes: '../angular/angular-route',
        jquery: '../jquery/jquery-1.10.2.min'
    },
    shim: {
        angular: { 'exports': 'angular', deps: ['jquery'] },
        angularRoutes: { deps: ['angular'] },
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
    'app',
    'MasterController'
], function (angular, angularRoutes, app, masterController) {
        $(document).ready(function () {
            var $html = $('html');
            angular.bootstrap($html, ['LearningApp']);
            // More info: https://groups.google.com/forum/#!msg/angular/yslVnZh9Yjk/MLi3VGXZLeMJ
            $html.addClass('ng-app');
        });
    });