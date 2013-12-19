/// <reference path="../typings/angular/angular.d.ts" />
import app = require("app");
import Tab = require("controlModels/Tab");
export class MasterController {
    //$inject tells Angular the objects to inject into the constructor because the parameter names of the instructor may be changed during JS minification.
    static $inject = ['$scope'];
    constructor(private $scope: ng.IScope) {
        this.CreateTabs();
        this.ActiveTab = this.Tabs[0];
    }

    public Title: string = "hello";
    public IsMainMenuVisible: boolean = false;
    public Tabs: Tab.Tab[] = [];

    private ActiveTab: Tab.Tab;

    public ActivateTab(tab: Tab.Tab): void {
        this.ActiveTab = tab;
    }

    public IsActiveTab(tab: Tab.Tab): boolean {
        if (tab === this.ActiveTab) {
            return true;
        }
        return false;
    }

    public ShowMenu() {
        this.IsMainMenuVisible = true;
    }

    public HideMenu() {
        this.IsMainMenuVisible = false;
    }

    private CreateTabs(): void {
        this.Tabs.push(new Tab.Tab("tab 1", "tab1", "#/partialPageView1"));
        this.Tabs.push(new Tab.Tab("tab 2", "tab2", "#/partialPageView2"));
    }
}
app.app.controller('MasterController', ["$scope", MasterController]);