import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MainComponent = class MainComponent {
    constructor(_router) {
        this._router = _router;
    }
    narrateFunction() {
        this._router.navigate(['sign-up']);
    }
    continueFunction() {
        this._router.navigate(['sign-in']);
    }
    ngOnInit() { }
};
MainComponent = __decorate([
    Component({
        selector: 'app-main',
        templateUrl: './main.component.html',
        styleUrls: ['./main.component.css'],
    })
], MainComponent);
export { MainComponent };
//# sourceMappingURL=main.component.js.map