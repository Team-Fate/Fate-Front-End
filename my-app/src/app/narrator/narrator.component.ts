import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-narrator',
  templateUrl: './narrator.component.html',
  styleUrls: ['./narrator.component.css'],
})
export class NarratorComponent implements OnInit {
  @Input() text:any;
  constructor() {}

  ngOnInit(): void {}
}
