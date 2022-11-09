import { Component, OnInit } from '@angular/core';
import { CharacterModelComponent } from '../character-model/character-model.component';
import { CharacterTokenComponent } from '../character-token/character-token.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})

export class CharacterListComponent implements OnInit {

  constructor(private httpClient: HttpClient) {
    this.characterList = []
  }

  characterList: any

  ngOnInit(): void {
    this.getCharacters()
  }

  getCharacters() {
    this.httpClient.get('https://your-fate-back-end.herokuapp.com/api/characters').subscribe((res:any) => {
      this.characterList=res
    })
  }



}
