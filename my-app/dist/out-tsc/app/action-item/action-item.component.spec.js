import { TestBed } from '@angular/core/testing';
import { ActionItemComponent } from './action-item.component';
describe('ActionItemComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ActionItemComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ActionItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=action-item.component.spec.js.map