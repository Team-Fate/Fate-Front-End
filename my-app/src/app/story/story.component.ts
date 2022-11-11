import { FetchDataService } from './../services/fetch-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
})
export class StoryComponent implements OnInit {
  sub: any;
  character: any;
  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private fetchData: FetchDataService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.character = this.fetchData
        .getCharacterById(params['character'])
        .subscribe((character: any) => {
          this.character = character;
        });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
