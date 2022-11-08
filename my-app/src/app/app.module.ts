import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterStatsComponent } from './character-stats/character-stats.component';
import { CharacterCreationComponent } from './character-creation/character-creation.component';
import { CharacterTokenComponent } from './character-token/character-token.component';
import { CharacterModelComponent } from './character-model/character-model.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterStatsComponent,
    CharacterCreationComponent,
    CharacterTokenComponent,
    CharacterModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
