import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

 
  constructor(private _router: Router) { }
  continueFunction(event: MouseEvent) {
    this._router.navigate(['sign-in']);

}
  narrateFunction(event: MouseEvent) {
    this._router.navigate(['sign-up']);
  }
  ngOnInit(): void {
  }

}
