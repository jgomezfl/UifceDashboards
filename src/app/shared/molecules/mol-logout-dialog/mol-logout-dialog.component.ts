import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mol-logout-dialog',
  //standalone: true,
  //imports: [],
  templateUrl: './mol-logout-dialog.component.html',
  styleUrl: './mol-logout-dialog.component.scss'
})
export class MolLogoutDialogComponent {

  constructor(private dialogRef: MatDialogRef<MolLogoutDialogComponent>){}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

}
