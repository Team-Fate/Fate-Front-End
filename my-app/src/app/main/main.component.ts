import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  toDisplay = true;
  constructor(private _router: Router) {}

  toggleData() {
    this.toDisplay = !this.toDisplay;
  }
  narrateFunction() {
    this._router.navigate(['sign-up']);
    this.toggleData();
  }
  continueFunction() {
    this._router.navigate(['sign-in']);
    this.toggleData();
  }

  ngOnInit(): void {}
}
