import { Routes } from '@angular/router';
import { BaseLayoutComponent } from './layouts/base-layout.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent }, 
  { path: '', redirectTo: 'login', pathMatch: 'full' }, 

  {
    path: 'app',
    component: BaseLayoutComponent,
    children: [
      {
        path: 'view-profiles',
        loadComponent: () => import('./components/view-profiles.component').then(m => m.ViewProfilesComponent)
      },
      {
        path: 'add-profile',
        loadComponent: () => import('./components/add-profile/add-profile.component').then(m => m.AddProfileComponent)
      },
      {
        path: 'create-users',
        loadComponent: () => import('./components/create-users/create-users.component').then(m => m.CreateUsersComponent)
      },
      {
        path: 'mis',
        loadComponent: () => import('./components/mis/mis.component').then(m => m.MisComponent)
      },
      {
        path: 'summary',
        loadComponent: () => import('./components/summary/summary.component').then(m => m.SummaryComponent)
      },
      {
        path: 'sanctioned-loans',
        loadComponent: () => import('./components/sanctioned-loans/sanctioned-loans.component').then(m => m.SanctionedLoansComponent)
      },
      {
        path: 'incomplete',
        loadComponent: () => import('./components/incomplete/incomplete.component').then(m => m.IncompleteComponent)
      },
      {
        path: 'failure-cases',
        loadComponent: () => import('./components/failure-cases/failure-cases.component').then(m => m.FailureCasesComponent)
      },
      { path: '', redirectTo: 'view-profiles', pathMatch: 'full' } 
    ]
  }
];
