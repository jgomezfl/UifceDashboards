import { Component,  TemplateRef, ViewChild  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../../core/services/auth.service';

import { SidebarComponent } from '../sidebar/sidebar.component';
import { MolLogoutDialogComponent } from '../../molecules/mol-logout-dialog/mol-logout-dialog.component';

//Import Mat
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    SidebarComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  showSidebar = false;

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }

  // @ViewChild('sidebarTemplate') sidebarTemplate!: TemplateRef<any>;

  constructor(private authService: AuthService, private dialog: MatDialog) {}

  openLogoutDialog(): void {
    const dialogRef = this.dialog.open(MolLogoutDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.logout();
      }
    });
  }

  logout(): void {
    // Lógica de logout (puedes ajustar según tu autenticación)
    console.log('Sesión cerrada');
    // Aquí podrías llamar a tu servicio de autenticación para cerrar sesión
  }

  get isAuthenticated(): boolean {
    return !this.authService.isTokenExpired();
  }

}