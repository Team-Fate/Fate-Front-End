import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RollDiceService {
  constructor() {}
  rollStats() {
    const stats = {
      s: 0,
      d: 0,
      c: 0,
      i: 0,
    };
    stats.s = this.rollStat();
    stats.d = this.rollStat();
    stats.c = this.rollStat();
    stats.i = this.rollStat();
    return stats;
  }

  private getRandomValue(min: number, max: number) {
    if (min > 1) {
      return Math.random() * (max + 1 - min) + min;
    } else {
      return Math.random() * (max - min) + min;
    }
  }
  private rollStat() {
    const rolls = [];
    for (let index = 0; index < 4; index++) {
      rolls.push(this.rollDice6());
    }
    rolls.sort((a: number, b: number) => b - a);
    return rolls[0] + rolls[1] + rolls[2];
  }
  rollDice18() {
    return Math.floor(this.getRandomValue(1, 19));
  }
  rollDice6() {
    return Math.floor(this.getRandomValue(1, 7));
  }
}
