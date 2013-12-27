var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'app', 'PartialPageController'], function(require, exports, __app__, __base__) {
    var app = __app__;
    var base = __base__;

    var PartialPage1Controller = (function (_super) {
        __extends(PartialPage1Controller, _super);
        function PartialPage1Controller($scope) {
            _super.call(this, $scope);
            this.SomeValue = "somevalue1";
        }
        PartialPage1Controller.$injector = ['$scope'];
        return PartialPage1Controller;
    })(base.PartialPageController);
    exports.PartialPage1Controller = PartialPage1Controller;

    //This would be the normal way of declaring the controller
    app.app.controller('PartialPage1Controller', ["$scope", PartialPage1Controller]);

    //Due to dynamic loading, the controller must be registered after the fact.
    //See http://ify.io/lazy-loading-in-angularjs/ for details on lazy loading.
    app.app.ControllerProvider.register('PartialPage1Controller', PartialPage1Controller);
});
//# sourceMappingURL=PartialPage1Controller.js.map
