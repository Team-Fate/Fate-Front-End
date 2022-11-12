import { FetchDataService } from './../services/fetch-data.service';
import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
})
export class StoryComponent implements OnInit {
  sub: any;
  character: any;
  templateCSS: any;
  tokenPositionCSS: any;
  cards: string[] = [];
  narratorText: any;

  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private fetchData: FetchDataService
  ) {}

  ngOnInit(): void {
    this.getCharacter();
    this.templateCSS = this.prepareTemplateCSS();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private getCharacter() {
    this.route.queryParams.subscribe((params) => {
      this.character = this.fetchData
        .getCharacterById(params['character'])
        .subscribe((character: any) => {
          this.character = character;
          this.tokenPositionCSS = character.story.tokenPosition;
          this.character.story.cardsPosition.map((row: any) => {
            row.map((card: any) => {
              this.cards.push(card);
            });
          });
        });
    });
  }

  private prepareTemplateCSS() {
    const styles = {
      gridTemplateRows: '',
      gridTemplateColumns: '',
    };
    const storyTemplate = [
      [0, 0, 1],
      [0, 1, 1],
      [1, 1, 0],
    ]; //this.fetchData.getStoryById(this.character.story.id);
    const storyRows = storyTemplate.length;
    const storyColumns = storyTemplate[0].length;
    styles.gridTemplateRows = `repeat(${storyRows}, 1fr)`;
    styles.gridTemplateColumns = `repeat(${storyColumns}, 1fr)`;
    return styles;
  }

  getNarratorTextFromCard(narratorText: any) {
    this.narratorText = narratorText;
  }
}
