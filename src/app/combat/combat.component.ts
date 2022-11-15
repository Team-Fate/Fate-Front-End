import { CombatService } from './../services/combat.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css'],
})
export class CombatComponent implements OnInit {
  @Input() character: any;
  @Input() enemy: any;
  @Output() combatResult = new EventEmitter<any>();
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
    let result;
    switch (selectedAction.name) {
      case 'Attack':
        result = this.combat.attack(this.character, this.enemy);
        if (result.status == 'missed') {
          this.log.unshift('Your attack missed');
        }
        if (result.status == 'damaged') {
          this.enemy.status.currentHealth =
            this.enemy.status.currentHealth - result.damage;
          this.log.unshift(`Your attack deal ${result.damage} damage`);
          if (this.enemy.status.currentHealth <= 0) {
            this.combatResult.emit({
              result: 'win',
            });
          }
        }
        break;
      case 'Defend':
        result = this.combat.defend(this.character);
        if (result.status == 'success') {
          this.character.defendStance = true;
        }
        break;
    }
    result = this.combat.attack(this.enemy, this.character);
    if (result.status == 'missed') {
      this.log.unshift('Enemy attack missed');
    }
    if (result.status == 'damaged') {
      this.character.status.currentHealth =
        this.character.status.currentHealth - result.damage;
      this.log.unshift(`Enemy attack deal ${result.damage} damage`);
    }
  }
}
