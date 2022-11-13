import { FetchDataService } from './../services/fetch-data.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.css'],
})
export class ActionListComponent implements OnInit {
  @Input() character: any;
  actions: any;
  constructor(private fetchData: FetchDataService) {}

  ngOnInit(): void {
    this.fetchData.getCharacterActions(this.character._id).subscribe((res) => {
      this.actions = res;
    });
  }
}
