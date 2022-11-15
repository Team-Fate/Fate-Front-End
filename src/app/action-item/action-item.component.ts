import { FetchDataService } from './../services/fetch-data.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-item',
  templateUrl: './action-item.component.html',
  styleUrls: ['./action-item.component.css'],
})
export class ActionItemComponent implements OnInit {
  @Input() actionId: any;
  @Output() selectedAction = new EventEmitter<any>();
  action: any;
  constructor(private fetchData: FetchDataService) {}

  ngOnInit(): void {
    this.fetchData.getActionById(this.actionId).subscribe((res) => {
      this.action = res;
    });
  }

  doAction() {
    this.selectedAction.emit(this.action);
  }
}
