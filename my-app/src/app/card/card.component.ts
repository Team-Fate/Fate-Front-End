import { FetchDataService } from './../services/fetch-data.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() cardId: any;
  card: any;
  constructor(private fetchData: FetchDataService) {}

  ngOnInit(): void {
    if (this.cardId == null) {
      return;
    }
    this.fetchData.getCardById(this.cardId).subscribe((card: any) => {
      this.card = card;
    });
  }
}
