import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DevelopDashboardComponent } from './pages/develop-dashboard/develop-dashboard.component';
import { FreeCourses20241DashboardComponent } from './pages/free-courses20241-dashboard/free-courses20241-dashboard.component';
import { FreeCourses20242DashboardComponent } from './pages/free-courses20242-dashboard/free-courses20242-dashboard.component';
import { TeachingAssistantsComponent } from './pages/teaching-assistants/teaching-assistants.component';
import { KnowledgeManagementComponent } from './pages/knowledge-management/knowledge-management.component';
import { TechStrategiesComponent } from './pages/tech-strategies/tech-strategies.component';

const routes: Routes = [
  {
    path: 'freeCourses20241',
    component: FreeCourses20241DashboardComponent
  },
  {
    path: 'freeCourses20242',
    component: FreeCourses20242DashboardComponent
  },
  {
    path: 'teachingAssistant',
    component: TeachingAssistantsComponent
  },
  {
    path: 'knowledgeManagement',
    component: KnowledgeManagementComponent
  },
  {
    path: 'techStrategies',
    component: TechStrategiesComponent
  },
  {
    path: 'develop',
    component: DevelopDashboardComponent
  },
  {
    path: '',
    redirectTo: 'freeCourses20241',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
