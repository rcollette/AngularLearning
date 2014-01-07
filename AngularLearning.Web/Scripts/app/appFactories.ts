/// <reference path="../typings/angular/angular.d.ts" />
"use strict";
import app = require('app');

module LearningApplication {
    export class Page {
        private _title: string = "default";
    }
}

app.app.factory('Page', function () {
    return new LearningApplication.Page();
});