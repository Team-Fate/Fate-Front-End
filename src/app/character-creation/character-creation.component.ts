import { FormValidatorService } from './../services/form-validator.service';
import { RollDiceService } from './../services/roll-dice.service';
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
  // biker = 'assets/images/Biker_idle.png';
  // cyborg = 'assets/images/Cyborg_idle.png';
  // punk = 'assets/images/Punk_idle.png';
  models = ['assets/images/Biker_idle.png', 'assets/images/Cyborg_idle.png', 'assets/image/Punk_idle.png']
  currentIndex: any;
  character: any;
  constructor(
    private _router: Router,
    private fetchData: FetchDataService,
    private rollDice: RollDiceService,
    private formValidator: FormValidatorService
  ) {}
  form = new FormGroup({
    characterName: new FormControl<string>('', Validators.required),
    image: new FormControl<string>(this.models[0]),
    model: new FormControl<string>(this.models[0]),
    stats: new FormControl<any>({ S: null, D: null, C: null, I: null }),
  });
  get characterName() {
    return this.form.controls.characterName as FormControl;
  }
  get model() {
    return this.form.controls.model as FormControl;
  }
  get image() {
    return this.form.controls.image as FormControl;
  }
  get stats() {
    return this.form.controls.stats as FormControl;
  }

  ngOnInit(): void {
    this.character = {
      name: this.characterName.value,
      image: this.image.value,
      model: this.model.value,
    };
    this.currentIndex = 0;
  }

  submit() {
    if (this.form.status == 'INVALID') {
      this.formValidator.validateAllFormFields(this.form);
      return;
    }
    this.fetchData
      .createCharacter({
        name: this.characterName.value,
        image: this.image.value,
        model: this.model.value,
        stats: this.stats.value,
      })
      .subscribe((res) => {
        this._router.navigate(['character-list']);
      });
  }

  rollStats() {
    this.stats.setValue(this.rollDice.rollStats());
  }
  
  clickLeft() {
    if (this.currentIndex == 0) {
      this.model.setValue(this.models[this.models.length - 1])
      this.currentIndex = this.models.length - 1;
    } else {
      this.model.setValue(this.models[this.currentIndex + 1])
      this.currentIndex += 1
    }
  }
   clickRight() {
        if (this.currentIndex == this.models.length - 1) {
      this.model.setValue(this.models[0])
      this.currentIndex = 0;
    } else {
      this.model.setValue(this.models[this.currentIndex - 1])
      this.currentIndex -= 1
    }

  }
}
