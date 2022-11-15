import { TestBed } from '@angular/core/testing';
import { ActionListComponent } from './action-list.component';
describe('ActionListComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ActionListComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ActionListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=action-list.component.spec.js.map