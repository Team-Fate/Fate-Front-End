import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Your Fate';
  displayHeader: any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.displayHeader = false;
    this.router.events.subscribe((res) => {
      if (this.router.url != '/') {
        this.displayHeader = true;
      } else {
        this.displayHeader = false;
      }
    });
  }
}
