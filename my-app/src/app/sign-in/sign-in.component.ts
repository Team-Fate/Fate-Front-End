import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private _router: Router) { }
  enterFunction(event: MouseEvent) {
    this._router.navigate(['character-list']);
  }
  cancelFunction(event: MouseEvent) {
    this._router.navigate(['app']);
  }
  ngOnInit(): void {
  }

}
