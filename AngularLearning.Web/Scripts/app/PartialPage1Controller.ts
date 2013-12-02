import app = require('app');
import base = require('PartialPageController');

export class PartialPage1Controller extends base.PartialPageController {
    static $injector = ['$scope'];
    constructor($scope: ng.IScope) {
        super($scope);
        this.SomeValue = "somevalue1";
    }
}

app.app.controller('PartialPage1Controller', ["$scope", PartialPage1Controller]);