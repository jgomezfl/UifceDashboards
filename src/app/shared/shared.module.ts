import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//Import Angular Material Components
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule }     from '@angular/material/input';
import { MatDialogContent } from '@angular/material/dialog';
import { MatDialogActions } from '@angular/material/dialog';
// import { MatDialogRef } from '@angular/material/dialog';

//Componentes Atómicos
import { AtomInputComponent } from './atoms/atom-input/atom-input.component';
import { AtomLabelComponent } from './atoms/atom-label/atom-label.component';
import { AtomButtonComponent } from './atoms/atom-button/atom-button.component';

//Componentes Moleculas
import { MolLoginFormComponent } from './molecules/mol-login-form/mol-login-form.component';
import { MolLogoutDialogComponent } from './molecules/mol-logout-dialog/mol-logout-dialog.component';

@NgModule({
  declarations: [
    AtomInputComponent,
    AtomLabelComponent,
    AtomButtonComponent,

    MolLoginFormComponent,
    MolLogoutDialogComponent,
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    OverlayModule,
    CdkAccordionModule,
    ReactiveFormsModule,

    AtomInputComponent,
    AtomLabelComponent,
    AtomButtonComponent,

    MolLoginFormComponent,
    MolLogoutDialogComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    OverlayModule,
    CdkAccordionModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogContent,
    MatDialogActions,
    // MatDialogRef,
  ]
})
export class SharedModule { }
