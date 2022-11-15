import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
let SignInComponent = class SignInComponent {
    constructor(_router, fetchDataService) {
        this._router = _router;
        this.fetchDataService = fetchDataService;
        this.form = new FormGroup({
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
        });
    }
    get username() {
        return this.form.controls.username;
    }
    get password() {
        return this.form.controls.password;
    }
    submit() {
        if (this.form.status == 'INVALID') {
            return;
        }
        const token = this.fetchDataService.signIn(this.form.value);
        this._router.navigate(['character-list']);
    }
    cancelFunction() {
        this._router.navigate(['']);
    }
    ngOnInit() { }
};
SignInComponent = __decorate([
    Component({
        selector: 'app-sign-in',
        templateUrl: './sign-in.component.html',
        styleUrls: ['./sign-in.component.css'],
    })
], SignInComponent);
export { SignInComponent };
//# sourceMappingURL=sign-in.component.js.map