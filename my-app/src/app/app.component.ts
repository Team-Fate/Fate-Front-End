import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  toDisplay = true;
  constructor(private _router: Router) { }
  toggleData() {
    this.toDisplay = !this.toDisplay
  }
  narrateFunction(event: MouseEvent) {
    this._router.navigate(['sign-up']);
    this.toggleData();
  }
  continueFunction(event: MouseEvent) {
    this._router.navigate(['sign-in']);
    this.toggleData();


}
}