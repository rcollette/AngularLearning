/// <reference path="../models/MasterModel.ts" />
var Controllers;
(function (Controllers) {
    var MasterController = (function () {
        function MasterController($scope) {
            this.$scope = $scope;
            $scope.Model = new Models.MasterModel();
        }
        return MasterController;
    })();
    Controllers.MasterController = MasterController;
})(Controllers || (Controllers = {}));
//# sourceMappingURL=MasterController.js.map
