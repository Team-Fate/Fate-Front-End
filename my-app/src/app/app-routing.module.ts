import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CharacterCreationComponent } from './character-creation/character-creation.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CombatComponent } from './combat/combat.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StoryComponent } from './story/story.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'app', component: AppComponent },
  { path: 'character-list', component: CharacterListComponent },
  { path: 'character-creation', component: CharacterCreationComponent },
  { path: 'story', component: StoryComponent },
  { path: 'combat', component: CombatComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
