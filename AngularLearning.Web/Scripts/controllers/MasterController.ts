/// <reference path="../typings/angular/angular.d.ts" />
/// <reference path="../models/MasterModel.ts" />
module Controllers {
    export class MasterController {
        constructor(private $scope: ng.IScope) {
        }

        public Title: string = "hello";
        public IsMenuVisible: boolean = false;
    }
}

app.controller('MasterController', ["$scope", Controllers.MasterController]);