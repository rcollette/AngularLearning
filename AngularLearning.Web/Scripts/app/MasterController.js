define(["require", "exports", "app"], function(require, exports, __app__) {
    /// <reference path="../typings/angular/angular.d.ts" />
    /// <reference path="controlModels/Tab.ts" />
    var app = __app__;
    var MasterController = (function () {
        function MasterController($scope) {
            this.$scope = $scope;
            this.Title = "hello";
            this.IsMainMenuVisible = false;
            this.Tabs = [];
            this.CreateTabs();
        }
        MasterController.prototype.CreateTabs = function () {
        };
        return MasterController;
    })();
    exports.MasterController = MasterController;
    app.app.controller('MasterController', ["$scope", MasterController]);
});
//# sourceMappingURL=MasterController.js.map
