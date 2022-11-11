import { Component, OnInit } from '@angular/core';
import { RollDiceService } from '../services/roll-dice.service'

@Component({
  selector: 'app-character-stats',
  templateUrl: './character-stats.component.html',
  styleUrls: ['./character-stats.component.css']
})
export class CharacterStatsComponent implements OnInit {

  constructor(private rollDice: RollDiceService) { 

  }
 stats = {
  s: null,
  d: null,
  c: null,

}
  ngOnInit(): void {
  }

}
