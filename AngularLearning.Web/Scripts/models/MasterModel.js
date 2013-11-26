var Models;
(function (Models) {
    var MasterModel = (function () {
        function MasterModel() {
        }
        MasterModel.prototype.SetTitle = function (value) {
            this._title = value;
        };

        MasterModel.prototype.GetTitle = function () {
            return this._title;
        };
        return MasterModel;
    })();
    Models.MasterModel = MasterModel;
})(Models || (Models = {}));
//# sourceMappingURL=MasterModel.js.map
