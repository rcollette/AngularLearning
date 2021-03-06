var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'app', 'PartialPageController'], function(require, exports, __app__, __base__) {
    var app = __app__;
    var base = __base__;

    var PartialPage2Controller = (function (_super) {
        __extends(PartialPage2Controller, _super);
        function PartialPage2Controller($scope) {
            _super.call(this, $scope);
            this.SomeValue = "somevalue2";
        }
        PartialPage2Controller.$injector = ['$scope'];
        return PartialPage2Controller;
    })(base.PartialPageController);
    exports.PartialPage2Controller = PartialPage2Controller;

    //This would be the normal way of declaring the controller
    //app.app.controller('PartialPage2Controller', ["$scope", PartialPage2Controller]);
    //Due to dynamic loading, the controller must be registered after the fact.
    //See http://ify.io/lazy-loading-in-angularjs/ for details on lazy loading.
    app.app.ControllerProvider.register('PartialPage2Controller', PartialPage2Controller);
});
//# sourceMappingURL=PartialPage2Controller.js.map
