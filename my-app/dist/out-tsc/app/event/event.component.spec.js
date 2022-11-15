import { TestBed } from '@angular/core/testing';
import { EventComponent } from './event.component';
describe('EventComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EventComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(EventComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=event.component.spec.js.map