import { TestBed } from '@angular/core/testing';
import { CharacterCreationComponent } from './character-creation.component';
describe('CharacterCreationComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CharacterCreationComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(CharacterCreationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=character-creation.component.spec.js.map