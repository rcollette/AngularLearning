define(["require", "exports", 'app'], function(require, exports, __app__) {
    /// <reference path="../typings/angular/angular.d.ts" />
    "use strict";
    var app = __app__;
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

    app.app.factory('Page', function () {
        return new Application.Page();
    });
});
//# sourceMappingURL=appFactories.js.map
