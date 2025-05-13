import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopDashboardComponent } from './develop-dashboard.component';

describe('DevelopDashboardComponent', () => {
  let component: DevelopDashboardComponent;
  let fixture: ComponentFixture<DevelopDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevelopDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevelopDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
