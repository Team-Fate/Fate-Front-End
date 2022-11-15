import { TestBed } from '@angular/core/testing';
import { CharacterModelComponent } from './character-model.component';
describe('CharacterModelComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CharacterModelComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(CharacterModelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=character-model.component.spec.js.map