export class PartialPageController {
    static $injector = ['$scope'];
    constructor(public $scope: ng.IScope) {
    }

    public SomeValue: string = "default";
}