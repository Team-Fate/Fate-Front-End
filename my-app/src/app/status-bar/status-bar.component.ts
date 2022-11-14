import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css'],
})
export class StatusBarComponent implements OnInit {
  @Input() character: any;
  constructor() {}

  ngOnInit(): void {
    this.character['status'] = {
      currentHealth: 50,
      maxHealth: 100,
    };
  }
}
