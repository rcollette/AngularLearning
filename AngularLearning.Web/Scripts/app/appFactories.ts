/// <reference path="../typings/angular/angular.d.ts" />
"use strict";
var app = angular.module('LearngingApp', []);

module Application {
    export class Page {
        private _title: string = "default";

    }
}

app.factory('Page', function () {
    return new Application.Page();
});