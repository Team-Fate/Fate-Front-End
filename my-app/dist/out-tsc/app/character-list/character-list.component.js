import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let CharacterListComponent = class CharacterListComponent {
    constructor(httpClient, _router) {
        this.httpClient = httpClient;
        this._router = _router;
        this.characterList = [];
    }
    ngOnInit() {
        this.getCharacters();
    }
    getCharacters() {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `bearer ${localStorage['token']}`
        });
        const requestOptions = { headers: headers };
        this.httpClient
            .get('https://your-fate-back-end.herokuapp.com/api/characters', requestOptions)
            .subscribe((res) => {
            this.characterList = res;
            this.currentCharacter = this.characterList[0];
            console.log(this.characterList);
        });
    }
    continueFunction() {
        this._router.navigate(['story']);
    }
};
CharacterListComponent = __decorate([
    Component({
        selector: 'app-character-list',
        templateUrl: './character-list.component.html',
        styleUrls: ['./character-list.component.css'],
    })
], CharacterListComponent);
export { CharacterListComponent };
//# sourceMappingURL=character-list.component.js.map