import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  constructor(private _router: Router) { }
  continueFunction(event: MouseEvent) {
    this._router.navigate(['sign-in']);

}
  narrateFunction(event: MouseEvent) {
    this._router.navigate(['sign-up']);
  }
}
