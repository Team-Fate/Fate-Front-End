import { FetchDataService } from './../services/fetch-data.service';
import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs';
declare var animateCSSGrid: any;

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
})
export class StoryComponent implements OnInit {
  @ViewChild('story', { static: true }) public story: any;
  sub: any;
  character: any;
  templateCSS: any;
  tokenPositionCSS: any;
  cards: any[] = [];
  dataFromCard: any;
  tokenPosition: any;
  currentEnemy: any;
  displayCombat: any;

  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private fetchData: FetchDataService
  ) {}

  ngOnInit(): void {
    this.getCharacter();
    this.templateCSS = this.prepareTemplateCSS();
    this.dataFromCard = {
      narratorText: '',
      cardPosition: '',
      enemyId: '',
    };
    this.displayCombat = false;
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
          this.tokenPositionCSS = {
            'grid-row': `${character.story.tokenPosition[0] + 1} / ${
              character.story.tokenPosition[0] + 2
            }`,
            'grid-column': `${character.story.tokenPosition[1] + 1} / ${
              character.story.tokenPosition[1] + 2
            }`,
          };

          this.character.story.cardsPosition.map((row: any, i: number) => {
            row.map((card: any, j: number) => {
              const cardObject = {
                cardId: card,
                cardPosition: [i, j],
                cardStyle: {
                  'grid-row': `${i + 1} / ${i + 1 + 1}`,
                  'grid-column': `${(j % 3) + 1} / ${(j % 3) + 1 + 1}`,
                },
              };
              this.cards.push(cardObject);
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

  getDataFromCard(dataFromCard: any) {
    this.dataFromCard = dataFromCard;
    this.tokenPositionCSS = dataFromCard.cardPosition;
    if (dataFromCard.enemyId != undefined) {
      this.fetchData.getNpcById(dataFromCard.enemyId).subscribe((res) => {
        this.currentEnemy = res;
        this.displayCombat = true;
      });
    }
    animateCSSGrid.wrapGrid(this.story.nativeElement).forceGridAnimation();
  }
}
