import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class RollDiceService {
	constructor() {}
	rollStats() {
		const stats = {
			S: 0,
			D: 0,
			C: 0,
			I: 0,
		};
		stats.S = this.rollStat();
		stats.D = this.rollStat();
		stats.C = this.rollStat();
		stats.I = this.rollStat();
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
