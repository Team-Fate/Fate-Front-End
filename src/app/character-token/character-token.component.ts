import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character-token',
  templateUrl: './character-token.component.html',
  styleUrls: ['./character-token.component.css'],
})
export class CharacterTokenComponent implements OnInit {
  @Input() character: any;
  constructor() {}

  ngOnInit(): void {}
}
