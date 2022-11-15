import { FetchDataService } from './../services/fetch-data.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
	@Input() cardObject: any;
	@Input() cardIndex: any;
	@Input() tokenPositionInput: any;
	@Output() dataFromCard = new EventEmitter<any>();
	card: any;
	rotateCSS: any;
	rotate: any;
	available: any;
	displayCombat: any;
	displayEnd: any;
	constructor(private fetchData: FetchDataService) {}

	ngOnInit(): void {
		this.displayCombat = false;
		this.displayEnd = false;
		if (this.cardObject.cardId == null) {
			return;
		}
		this.fetchData
			.getCardById(this.cardObject.cardId)
			.subscribe((card: any) => {
				this.card = card;
				if (card.name == 'Store') {
					this.displayEnd = true;
				}
			});
		this.rotate = false;
	}

	flipCard(event: any) {
		if (!this.rotate) {
			this.rotateCSS = 'flip-card-rotate';
			this.rotate = true;
			this.dataFromCard.emit({
				narratorText: this.card.description,
				cardPosition: this.cardObject.cardStyle,
				enemyId: this.card.enemy,
				displayEnd: this.displayEnd,
			});
		}
	}
}
