import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private _router: Router) { }
  createAccountFunction(event: MouseEvent) {
    this._router.navigate(['character-creation']);
  }

  cancelFunction(event: MouseEvent) {
    this._router.navigate(['app']);
  }
  ngOnInit(): void {
  }

}
