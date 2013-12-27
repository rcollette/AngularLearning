import app = require('app');
import base = require('PartialPageController');

export class PartialPage1Controller extends base.PartialPageController {
    static $injector = ['$scope'];
    constructor($scope: ng.IScope) {
        super($scope);
        this.SomeValue = "somevalue1";
    }
}

//This would be the normal way of declaring the controller
app.app.controller('PartialPage1Controller', ["$scope", PartialPage1Controller]);
//Due to dynamic loading, the controller must be registered after the fact.
//See http://ify.io/lazy-loading-in-angularjs/ for details on lazy loading.
app.app.ControllerProvider.register('PartialPage1Controller', PartialPage1Controller);