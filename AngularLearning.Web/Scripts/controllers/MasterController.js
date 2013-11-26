/// <reference path="../typings/angular/angular.d.ts" />
/// <reference path="../models/MasterModel.ts" />
var Controllers;
(function (Controllers) {
    var MasterController = (function () {
        function MasterController($scope) {
            this.$scope = $scope;
            this.Title = "hello";
            this.IsMenuVisible = false;
        }
        return MasterController;
    })();
    Controllers.MasterController = MasterController;
})(Controllers || (Controllers = {}));

app.controller('MasterController', ["$scope", Controllers.MasterController]);
//# sourceMappingURL=MasterController.js.map
