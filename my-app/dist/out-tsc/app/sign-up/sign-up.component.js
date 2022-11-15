import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
let SignUpComponent = class SignUpComponent {
    // constructor(private _router: Router) {}
    constructor(fetchDataService, _router) {
        this.fetchDataService = fetchDataService;
        this._router = _router;
        this.form = new FormGroup({
            firstname: new FormControl('', Validators.required),
            lastname: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            // confirmPassword: new FormControl<string>(''),
        }, Validators.required);
    }
    get firstname() {
        return this.form.controls.firstname;
    }
    get lastname() {
        return this.form.controls.lastname;
    }
    get email() {
        return this.form.controls.email;
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
        const response = this.fetchDataService.signUp(this.form.value);
        this._router.navigate(['character-creation']);
    }
    cancelFunction() {
        this._router.navigate(['']);
    }
    ngOnInit() { }
};
SignUpComponent = __decorate([
    Component({
        selector: 'app-sign-up',
        templateUrl: './sign-up.component.html',
        styleUrls: ['./sign-up.component.css'],
    })
], SignUpComponent);
export { SignUpComponent };
//# sourceMappingURL=sign-up.component.js.map