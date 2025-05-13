import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: 'login',
      loadChildren: () =>
        import('./features/auth/auth.module').then((m) => m.AuthModule),
    },
    {
      path: 'dashboard',
      loadChildren: () =>
        import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ];
