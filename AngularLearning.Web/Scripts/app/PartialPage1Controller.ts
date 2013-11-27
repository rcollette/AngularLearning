/// <reference path="PartialPageController.ts" />
import app = require('app');
import base = require('PartialPageController');

export class PartialPage1Controller extends base.PartialPageController {
}

app.app.controller('PartialPage1Controller', ["$scope", PartialPage1Controller]);