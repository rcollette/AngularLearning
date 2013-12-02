define(["require", "exports", "app", "controlModels/Tab"], function(require, exports, __app__, __Tab__) {
    /// <reference path="../typings/angular/angular.d.ts" />
    var app = __app__;
    var Tab = __Tab__;
    var MasterController = (function () {
        function MasterController($scope) {
            this.$scope = $scope;
            this.Title = "hello";
            this.IsMainMenuVisible = false;
            this.Tabs = [];
            this.CreateTabs();
            this.ActiveTab = this.Tabs[0];
        }
        MasterController.prototype.ActivateTab = function (tab) {
            this.ActiveTab = tab;
        };

        MasterController.prototype.IsActiveTab = function (tab) {
            if (tab === this.ActiveTab) {
                return true;
            }
            return false;
        };

        MasterController.prototype.CreateTabs = function () {
            this.Tabs.push(new Tab.Tab("tab 1", "tab1", "#/partialPageView1"));
            this.Tabs.push(new Tab.Tab("tab 2", "tab2", "#/partialPageView2"));
        };
        MasterController.$inject = ['$scope'];
        return MasterController;
    })();
    exports.MasterController = MasterController;
    app.app.controller('MasterController', ["$scope", MasterController]);
});
//# sourceMappingURL=MasterController.js.map
