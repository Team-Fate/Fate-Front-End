import { TestBed } from '@angular/core/testing';
import { CharacterStatsComponent } from './character-stats.component';
describe('CharacterStatsComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CharacterStatsComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(CharacterStatsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=character-stats.component.spec.js.map