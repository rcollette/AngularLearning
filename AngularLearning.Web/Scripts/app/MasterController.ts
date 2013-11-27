/// <reference path="../typings/angular/angular.d.ts" />
/// <reference path="controlModels/Tab.ts" />
import app = require("app");
export class MasterController {
    constructor(private $scope: ng.IScope) {
        this.CreateTabs();
    }

    public Title: string = "hello";
    public IsMainMenuVisible: boolean = false;
    public ActiveTab: ControlModels.Tab;
    private Tabs: ControlModels.Tab[] = [];

    private CreateTabs(): void {
    }
}
app.app.controller('MasterController', ["$scope", MasterController]);