import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingAssistantsComponent } from './teaching-assistants.component';

describe('TeachingAssistantsComponent', () => {
  let component: TeachingAssistantsComponent;
  let fixture: ComponentFixture<TeachingAssistantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachingAssistantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeachingAssistantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
