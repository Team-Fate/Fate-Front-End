import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcModelComponent } from './npc-model.component';

describe('NpcModelComponent', () => {
  let component: NpcModelComponent;
  let fixture: ComponentFixture<NpcModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpcModelComponent ]
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
