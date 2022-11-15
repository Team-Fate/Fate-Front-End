import { TestBed } from '@angular/core/testing';
import { StatusBarComponent } from './status-bar.component';
describe('StatusBarComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StatusBarComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(StatusBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=status-bar.component.spec.js.map