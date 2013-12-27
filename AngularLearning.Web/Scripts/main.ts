/// <reference path="typings/requirejs/require.d.ts" />
"use strict";
declare var Object;

require.config({
    baseUrl: 'scripts/app',
    paths: {
        angular: '../angular',
        angularRoutes: '../angular-route',
        angularAnimate: '../angular-animate.min',
        jquery: '../jquery/jquery-1.10.2.min',
        bootstrap: '../bootstrap.min'
    },
    shim: {
        angular: { 'exports': 'angular', deps: ['jquery'] },
        angularRoutes: { deps: ['angular'] },
        angularAnimate: { deps: ['angular'] },
        angularMocks: { deps: ['angular'], 'exports': 'angular.mock' },
        jquery: { exports: '$' },
        bootstrap: { deps: ['jquery'] },
        app: { deps: ['angular', 'angularRoutes', 'angularAnimate'] }
    },
    priority: [
        "angular"
    ]
});

require([
    'angular',
    'angularRoutes',
    'angularAnimate',
    'app',
    'appRoutes',
    'MasterController',
    'bootstrap'
], function (angular) {
        $(document).ready(function () {
            var $html = $('html');
            angular.bootstrap($html, ['LearningApp']);
            // More info: https://groups.google.com/forum/#!msg/angular/yslVnZh9Yjk/MLi3VGXZLeMJ
            $html.addClass('ng-app');
        });
    });