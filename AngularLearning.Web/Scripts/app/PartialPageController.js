define(["require", "exports"], function(require, exports) {
    var PartialPageController = (function () {
        function PartialPageController($scope) {
            this.$scope = $scope;
            this.SomeValue = "default";
        }
        PartialPageController.$injector = ['$scope'];
        return PartialPageController;
    })();
    exports.PartialPageController = PartialPageController;
});
//# sourceMappingURL=PartialPageController.js.map
