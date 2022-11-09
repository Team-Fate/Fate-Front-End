import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { FetchDataService } from './../services/fetch-data.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(
    private _router: Router,
    private fetchDataService: FetchDataService
    ) { }
  
    form = new FormGroup({
      username: new FormControl<string>(''),
      password: new FormControl<string>(''),
    });
  
    submit() {
      const response = this.fetchDataService.signIn(this.form.value);
      this._router.navigate(['']);
    }
  
  cancelFunction() {
    this._router.navigate(['']);
  }
  ngOnInit(): void {
  }

}
