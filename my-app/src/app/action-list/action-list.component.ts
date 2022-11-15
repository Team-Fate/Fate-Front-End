import { FetchDataService } from './../services/fetch-data.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.css'],
})
export class ActionListComponent implements OnInit {
  @Input() character: any;
  @Output() selectedAction = new EventEmitter<any>();
  actions: any;
  constructor(private fetchData: FetchDataService) {}

  ngOnInit(): void {
    if (this.character._id != undefined) {
      this.fetchData
        .getCharacterActions(this.character._id)
        .subscribe((res) => {
          this.actions = res;
        });
    }
  }
  passAction(selectedAction: any) {
    this.selectedAction.emit(selectedAction);
  }
}
