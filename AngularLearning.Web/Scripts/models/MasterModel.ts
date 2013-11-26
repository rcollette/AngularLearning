module Models {
    export class MasterModel {
        private _title: string

        public SetTitle(value: string) {
            this._title = value;
        }

        public GetTitle(): string {
            return this._title;
        }
    }
}