import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-event',
	templateUrl: './event.component.html',
	styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
	@Output() openCharacterList = new EventEmitter<any>();
	constructor(private _router: Router) {}

	ngOnInit(): void {}
	doOpenCharacterList() {
		this.openCharacterList.emit(true);
	}
}
