import { CharacterListComponent } from './character-list/character-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterCreationComponent } from './character-creation/character-creation.component';


const routes: Routes = [
  { path: 'character-creation', component: CharacterCreationComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'character-list', component: CharacterListComponent },
  { path: 'story', component: StoryComponent },
  { path: 'character-model', component: CharacterModelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
