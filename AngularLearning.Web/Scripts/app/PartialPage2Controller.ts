import app = require('app');
import base = require('PartialPageController');

export class PartialPage2Controller extends base.PartialPageController {
    static $injector = ['$scope'];
    constructor($scope: ng.IScope) {
        super($scope);
        this.SomeValue = "somevalue2";
    }
}

app.app.controller('PartialPage2Controller', ["$scope", PartialPage2Controller]);