import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeCourses20241DashboardComponent } from './free-courses20241-dashboard.component';

describe('FreeCourses20241DashboardComponent', () => {
  let component: FreeCourses20241DashboardComponent;
  let fixture: ComponentFixture<FreeCourses20241DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreeCourses20241DashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreeCourses20241DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
