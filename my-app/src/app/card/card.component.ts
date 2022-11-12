import { FetchDataService } from './../services/fetch-data.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() cardId: any;
  @Output() narratorText = new EventEmitter<String>();
  card: any;
  rotateCSS: any;
  rotate: any;
  constructor(private fetchData: FetchDataService) {}

  ngOnInit(): void {
    if (this.cardId == null) {
      return;
    }
    this.fetchData.getCardById(this.cardId).subscribe((card: any) => {
      this.card = card;
    });
    this.rotate = false;
  }

  flipCard(event: any) {
    console.log(event);
    if (!this.rotate) {
      this.rotateCSS = 'flip-card-rotate';
      this.rotate = true;
      this.narratorText.emit(this.card.description);
    }
  }
}
