/// <reference path="../models/MasterModel.ts" />
module Controllers {
    export class MasterController {
        constructor(private $scope) {
            $scope.Model = new Models.MasterModel();
        }

        public Title: string;
        public IsMenuVisible: boolean;
    }
}