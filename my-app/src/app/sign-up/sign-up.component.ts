import { FetchDataService } from './../services/fetch-data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  // constructor(private _router: Router) {}
  constructor(
    private fetchDataService: FetchDataService,
    private _router: Router
  ) {}

  form = new FormGroup({
    firstname: new FormControl<string>(''),
    lastname: new FormControl<string>(''),
    email: new FormControl<string>(''),
    username: new FormControl<string>(''),
    password: new FormControl<string>(''),
    // confirmPassword: new FormControl<string>(''),
  });

  submit() {
    const response = this.fetchDataService.signUp(this.form.value);
    this._router.navigate(['']);
  }

  cancelFunction() {
    this._router.navigate(['']);
  }
  ngOnInit(): void {}
}
