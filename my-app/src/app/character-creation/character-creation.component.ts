import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FetchDataService } from './../services/fetch-data.service';


@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.css'],
})
export class CharacterCreationComponent implements OnInit {

  constructor(private _router: Router,) { }
  form = new FormGroup({
    characterName: new FormControl<string>('', Validators.required)
  })
    get characterName() {
    return this.form.controls.characterName as FormControl;
  }

    submit() {
    if (this.form.status == 'INVALID') {
      return;
    }
    this._router.navigate(['character-list']);
  }
  biker = 'assets/images/Biker_idle.png'
  cyborg = 'assets/images/Cyborg_idle.png'
  punk = 'assets/images/Punk_idle.png'
  ngOnInit(): void {
  }

}
