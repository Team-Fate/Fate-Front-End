import { TestBed } from '@angular/core/testing';
import { CharacterListComponent } from './character-list.component';
describe('CharacterListComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CharacterListComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(CharacterListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=character-list.component.spec.js.map