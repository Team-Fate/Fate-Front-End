import { __decorate } from "tslib";
import { StoryComponent } from './story/story.component';
import { CharacterCreationComponent } from './character-creation/character-creation.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
const routes = [
    { path: '', component: MainComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'character-creation', component: CharacterCreationComponent },
    { path: 'sign-in', component: SignInComponent },
    { path: 'character-list', component: CharacterListComponent },
    { path: 'story', component: StoryComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule],
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map