import { TestBed } from '@angular/core/testing';
import { CharacterListItemComponent } from './character-list-item.component';
describe('CharacterListItemComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CharacterListItemComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(CharacterListItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=character-list-item.component.spec.js.map