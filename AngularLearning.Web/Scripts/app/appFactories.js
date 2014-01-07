define(["require", "exports", 'app'], function(require, exports, __app__) {
    /// <reference path="../typings/angular/angular.d.ts" />
    "use strict";
    var app = __app__;

    var LearningApplication;
    (function (LearningApplication) {
        var Page = (function () {
            function Page() {
                this._title = "default";
            }
            return Page;
        })();
        LearningApplication.Page = Page;
    })(LearningApplication || (LearningApplication = {}));

    app.app.factory('Page', function () {
        return new LearningApplication.Page();
    });
});
//# sourceMappingURL=appFactories.js.map
