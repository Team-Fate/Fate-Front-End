import { TestBed } from '@angular/core/testing';
import { StoryComponent } from './story.component';
describe('StoryComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(StoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=story.component.spec.js.map