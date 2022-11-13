import { FetchDataService } from './../services/fetch-data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormValidatorService } from './../services/form-validator.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  // constructor(private _router: Router) {}
  constructor(
    private fetchDataService: FetchDataService,
    private _router: Router,
    private formValidator: FormValidatorService
  ) {}

  form = new FormGroup(
    {
      firstname: new FormControl<string>('', Validators.required),
      lastname: new FormControl<string>('', Validators.required),
      email: new FormControl<string>('', Validators.required),
      username: new FormControl<string>('', Validators.required),
      password: new FormControl<string>('', Validators.required),
      // confirmPassword: new FormControl<string>(''),
    },
    Validators.required
  );

  get firstname() {
    return this.form.controls.firstname as FormControl;
  }
  get lastname() {
    return this.form.controls.lastname as FormControl;
  }
  get email() {
    return this.form.controls.email as FormControl;
  }
  get username() {
    return this.form.controls.username as FormControl;
  }
  get password() {
    return this.form.controls.password as FormControl;
  }

  submit() {
    if (this.form.status == 'INVALID') {
      this.formValidator.validateAllFormFields(this.form);
      return;
    }
    const response = this.fetchDataService.signUp(this.form.value);
    this._router.navigate(['character-creation']);
  }

  cancelFunction() {
    this._router.navigate(['']);
  }
  ngOnInit(): void {}
}
