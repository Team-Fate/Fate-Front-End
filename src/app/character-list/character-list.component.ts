import { Component, OnInit } from '@angular/core';
import { CharacterModelComponent } from '../character-model/character-model.component';
import { CharacterTokenComponent } from '../character-token/character-token.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
	selector: 'app-character-list',
	templateUrl: './character-list.component.html',
	styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit {
	constructor(private httpClient: HttpClient, private _router: Router) {}

	characterList: any;

	currentCharacter: any;

	ngOnInit(): void {
		this.getCharacters();
	}

	getCharacters() {
		const headers = new HttpHeaders({
			'Content-Type': 'application/json',
			Authorization: `bearer ${localStorage['token']}`,
		});

		const requestOptions = { headers: headers };

		this.httpClient
			.get(
				'https://your-fate-back-end.herokuapp.com/api/characters',
				requestOptions
			)
			.subscribe((res: any) => {
				console.log(res);
				if (res.length == 0) {
					return;
				}
				this.characterList = res;
				this.currentCharacter = this.characterList[0];
			});
	}

	selectCharacter(character: any) {
		this.currentCharacter = character;
	}
	continueFunction() {
		this._router.navigate(['story'], {
			queryParams: { character: this.currentCharacter._id },
		});
	}
}
