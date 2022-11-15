import { RollDiceService } from './roll-dice.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CombatService {
  constructor(private rollDice: RollDiceService) {}

  attack(character: any, enemy: any) {
    const result = {
      status: 'missed',
      damage: 0,
    };
    const characterRoll = this.rollDice.rollDice18();
    const enemyRoll = this.rollDice.rollDice18();
    if (characterRoll > enemyRoll) {
      const damage = this.rollDice.rollDice6(); //Add weapon modifier
      result.status = 'damaged';
      result.damage = damage;
      if (enemy.defendStance) {
        result.damage = Math.floor(damage / 2);
      }
    }
    return result;
  }

  defend(character: any) {
    const result = {
      status: 'failed',
    };
    const characterRoll = this.rollDice.rollDice18();
    if (characterRoll > 8) {
      result.status = 'success';
    }
    return result;
  }

  heal(character: any) {
    const result = {
      status: 'failed',
    };
    const characterRoll = this.rollDice.rollDice18();
    if (characterRoll > 8) {
      result.status = 'success';
    }
    return result;
  }
}
