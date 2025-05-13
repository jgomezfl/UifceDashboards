import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeCourses20242DashboardComponent } from './free-courses20242-dashboard.component';

describe('FreeCourses20242DashboardComponent', () => {
  let component: FreeCourses20242DashboardComponent;
  let fixture: ComponentFixture<FreeCourses20242DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreeCourses20242DashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreeCourses20242DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
