import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { PowerBiService } from '../../../../core/services/power-bi.service';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-knowledge-management',
  // standalone: true,
  // imports: [],
  templateUrl: './knowledge-management.component.html',
  styleUrl: './knowledge-management.component.scss'
})
export class KnowledgeManagementComponent implements OnInit {
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

    const embedUrl = 'https://app.powerbi.com/view?r=eyJrIjoiOTllNzAzZmUtZjFhNy00MWE1LWEwNzUtZWY1ZjM3Y2M2ZTFhIiwidCI6IjU3N2ZjMWQ4LTA5MjItNDU4ZS04N2JmLWVjNGY0NTVlYjYwMCIsImMiOjR9';
    this.powerBiService.embedReport(this.reportContainer.nativeElement, embedUrl);
  }
}
