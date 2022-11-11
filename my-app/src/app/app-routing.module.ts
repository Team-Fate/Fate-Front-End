import { StoryComponent } from './story/story.component';
import { CharacterCreationComponent } from './character-creation/character-creation.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CharacterModelComponent } from './character-model/character-model.component';
import { CharacterStatsComponent } from './character-stats/character-stats.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'character-creation', component: CharacterCreationComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'character-list', component: CharacterListComponent },
  { path: 'story', component: StoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
