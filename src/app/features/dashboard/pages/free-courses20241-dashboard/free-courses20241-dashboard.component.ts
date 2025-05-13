import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { PowerBiService } from '../../../../core/services/power-bi.service';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-free-courses20241-dashboard',
  // standalone: true,
  // imports: [],
  templateUrl: './free-courses20241-dashboard.component.html',
  styleUrl: './free-courses20241-dashboard.component.scss'
})
export class FreeCourses20241DashboardComponent {

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

    const embedUrl = 'https://app.powerbi.com/view?r=eyJrIjoiYTJjZWM5M2YtNTI3OS00MTliLWJiN2EtOTgwZDk2NGYzYTQwIiwidCI6IjU3N2ZjMWQ4LTA5MjItNDU4ZS04N2JmLWVjNGY0NTVlYjYwMCIsImMiOjR9';
    this.powerBiService.embedReport(this.reportContainer.nativeElement, embedUrl);
  }

}
