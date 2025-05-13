import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStrategiesComponent } from './tech-strategies.component';

describe('TechStrategiesComponent', () => {
  let component: TechStrategiesComponent;
  let fixture: ComponentFixture<TechStrategiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechStrategiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechStrategiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
