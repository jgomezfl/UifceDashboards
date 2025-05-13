import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { PowerBiService } from '../../../../core/services/power-bi.service';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teaching-assistants',
  // standalone: true,
  // imports: [],
  templateUrl: './teaching-assistants.component.html',
  styleUrl: './teaching-assistants.component.scss'
})
export class TeachingAssistantsComponent implements OnInit {
  @ViewChild('reportContainer', {static: true}) reportContainer!: ElementRef;

  constructor(
    private powerBiService: PowerBiService,
    private authService: AuthService,
    private router: Router
  ){}

  ngOnInit(): void {

    if (this.authService.isTokenExpired()) {
      console.warn('Token expirado o no válido, redirigiendo al login...');
      this.router.navigate(['/login']); // o la ruta que uses para loguear
      return;
    }

    const embedUrl = 'https://app.powerbi.com/view?r=eyJrIjoiZmU2MDFmZjYtM2ZkMC00NjIyLTk4MWMtNWZmODQzNDI0OTY3IiwidCI6IjU3N2ZjMWQ4LTA5MjItNDU4ZS04N2JmLWVjNGY0NTVlYjYwMCIsImMiOjR9';
    this.powerBiService.embedReport(this.reportContainer.nativeElement, embedUrl);
  }
}
