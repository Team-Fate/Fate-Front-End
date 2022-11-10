import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private _router: Router) {}

  displayHeader = false;
  stageMain = true;
  stageCharacterCreation = false;
  stageCharacterList = false;
  stageStoty = false;
  stageCombat = false;

  narrateFunction() {
    this._router.navigate(['sign-up']);
  }
  continueFunction() {
    this._router.navigate(['sign-in']);
  }

  ngOnInit(): void {}
}
