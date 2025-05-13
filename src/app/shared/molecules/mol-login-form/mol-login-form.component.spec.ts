import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolLoginFormComponent } from './mol-login-form.component';

describe('MolLoginFormComponent', () => {
  let component: MolLoginFormComponent;
  let fixture: ComponentFixture<MolLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MolLoginFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MolLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
