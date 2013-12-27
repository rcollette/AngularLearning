export class PartialPageController {
    // static $injector accommodates the fact that parameters may be renamed during minification.
    static $injector = ['$scope'];
    constructor(public $scope: ng.IScope) {
    }

    public SomeValue: string = "default";
}