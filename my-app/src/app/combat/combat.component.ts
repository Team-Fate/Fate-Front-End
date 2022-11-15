import { CombatService } from './../services/combat.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css'],
})
export class CombatComponent implements OnInit {
  @Input() character: any;
  @Input() enemy: any;
  dataFromAction: any;
  log: any;
  constructor(private combat: CombatService) {}

  ngOnInit(): void {
    this.enemy['status'] = {
      currentHealth: this.character.stats.C * 3,
      maxHealth: this.character.stats.C * 3,
    };
    this.log = [];
  }

  doAction(selectedAction: any) {
    switch (selectedAction.name) {
      case 'Attack':
        let result = this.combat.attack(this.character, this.enemy);
        if (result.status == 'missed') {
          this.log.push('Your attack missed');
        }
        if (result.status == 'damaged') {
          this.enemy.status.currentHealth =
            this.enemy.status.currentHealth - result.damage;
          this.log.push(`Your attack deal ${result.damage} damage`);
        }
        break;
      case 'Defend':
        break;
    }
    let result = this.combat.attack(this.enemy, this.character);
    if (result.status == 'missed') {
      this.log.push('Enemy attack missed');
    }
    if (result.status == 'damaged') {
      this.character.status.currentHealth =
        this.character.status.currentHealth - result.damage;
      this.log.push(`Enemy attack deal ${result.damage} damage`);
    }
  }
}
