import { Component, OnInit, Input } from '@angular/core';
import { RollDiceService } from '../services/roll-dice.service';

@Component({
  selector: 'app-character-stats',
  templateUrl: './character-stats.component.html',
  styleUrls: ['./character-stats.component.css'],
})
export class CharacterStatsComponent implements OnInit {
  @Input() stats: any;
  constructor(private rollDice: RollDiceService) {}

  ngOnInit(): void {}
}
