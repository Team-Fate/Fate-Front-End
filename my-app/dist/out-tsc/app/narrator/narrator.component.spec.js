import { TestBed } from '@angular/core/testing';
import { NarratorComponent } from './narrator.component';
describe('NarratorComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NarratorComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(NarratorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=narrator.component.spec.js.map