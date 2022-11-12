import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.css']
})
export class CharacterCreationComponent implements OnInit {

  constructor(private router: Router,) { }
  biker = 'assets/images/Biker_idle.png'
  cyborg = 'assets/images/Cyborg_idle.png'
  punk = 'assets/images/Punk_idle.png'
  ngOnInit(): void {
  }

}
