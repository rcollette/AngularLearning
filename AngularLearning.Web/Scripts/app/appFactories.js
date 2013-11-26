/// <reference path="../typings/angular/angular.d.ts" />
"use strict";
var app = angular.module('LearngingApp', []);

var Application;
(function (Application) {
    var Page = (function () {
        function Page() {
            this._title = "default";
        }
        return Page;
    })();
    Application.Page = Page;
})(Application || (Application = {}));

app.factory('Page', function () {
    return new Application.Page();
});
//# sourceMappingURL=appFactories.js.map
