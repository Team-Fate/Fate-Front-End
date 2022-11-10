import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FetchDataService } from './../services/fetch-data.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  constructor(
    private _router: Router,
    private fetchDataService: FetchDataService
  ) {}

  form = new FormGroup({
    username: new FormControl<string>('', Validators.required),
    password: new FormControl<string>('', Validators.required),
  });

  get username() {
    return this.form.controls.username as FormControl;
  }
  get password() {
    return this.form.controls.password as FormControl;
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
  ngOnInit(): void {}
}
