import app = require('app');
import base = require('PartialPageController');

export class PartialPage2Controller extends base.PartialPageController {
    static $injector = ['$scope'];
    constructor($scope: ng.IScope) {
        super($scope);
        this.SomeValue = "somevalue2";
    }
}

//This would be the normal way of declaring the controller
//app.app.controller('PartialPage2Controller', ["$scope", PartialPage2Controller]);
//Due to dynamic loading, the controller must be registered after the fact.
//See http://ify.io/lazy-loading-in-angularjs/ for details on lazy loading.
app.app.ControllerProvider.register('PartialPage2Controller', PartialPage2Controller);