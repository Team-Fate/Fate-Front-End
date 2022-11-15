import { TestBed } from '@angular/core/testing';
import { CharacterTokenComponent } from './character-token.component';
describe('CharacterTokenComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CharacterTokenComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(CharacterTokenComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=character-token.component.spec.js.map