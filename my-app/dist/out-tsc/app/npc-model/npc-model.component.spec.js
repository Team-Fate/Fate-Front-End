import { TestBed } from '@angular/core/testing';
import { NpcModelComponent } from './npc-model.component';
describe('NpcModelComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NpcModelComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(NpcModelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=npc-model.component.spec.js.map