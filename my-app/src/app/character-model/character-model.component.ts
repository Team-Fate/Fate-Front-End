import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-model',
  templateUrl: './character-model.component.html',
  styleUrls: ['./character-model.component.css'],
})
export class CharacterModelComponent implements OnInit {
  @Input() character: any;
  constructor() {}

  ngOnInit(): void {}
}
