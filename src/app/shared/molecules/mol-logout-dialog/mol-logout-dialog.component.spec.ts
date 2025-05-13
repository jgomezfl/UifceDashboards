import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolLogoutDialogComponent } from './mol-logout-dialog.component';

describe('MolLogoutDialogComponent', () => {
  let component: MolLogoutDialogComponent;
  let fixture: ComponentFixture<MolLogoutDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MolLogoutDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MolLogoutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
