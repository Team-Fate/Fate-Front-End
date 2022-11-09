import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterStatsComponent } from './character-stats/character-stats.component';
import { CharacterCreationComponent } from './character-creation/character-creation.component';
import { CharacterTokenComponent } from './character-token/character-token.component';
import { CharacterModelComponent } from './character-model/character-model.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { StoryComponent } from './story/story.component';
import { NarratorComponent } from './narrator/narrator.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterListItemComponent } from './character-list-item/character-list-item.component';
import { CardComponent } from './card/card.component';
import { EventComponent } from './event/event.component';
import { NpcModelComponent } from './npc-model/npc-model.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { CombatComponent } from './combat/combat.component';
import { ActionListComponent } from './action-list/action-list.component';
import { ActionItemComponent } from './action-item/action-item.component';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CharacterStatsComponent,
    CharacterCreationComponent,
    CharacterTokenComponent,
    CharacterModelComponent,
    SignUpComponent,
    SignInComponent,
    StoryComponent,
    NarratorComponent,
    CharacterListComponent,
    CharacterListItemComponent,
    CardComponent,
    EventComponent,
    NpcModelComponent,
    StatusBarComponent,
    CombatComponent,
    ActionListComponent,
    ActionItemComponent,
    MainComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
