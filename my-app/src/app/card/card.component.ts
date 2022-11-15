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
  constructor(private fetchData: FetchDataService) {}

  ngOnInit(): void {
    this.displayCombat = false;
    if (this.cardObject.cardId == null) {
      return;
    }
    this.fetchData
      .getCardById(this.cardObject.cardId)
      .subscribe((card: any) => {
        this.card = card;
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
      });
    }
  }
}
