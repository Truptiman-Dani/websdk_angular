import { Routes } from '@angular/router';
import { BaseLayoutComponent } from './layouts/base-layout.component'; // Admin Layout
import { UserBaseLayoutComponent } from './layouts/user-base-layout.component'; // User Layout
import { LoginComponent } from './login/login/login.component';
import { UserLoginComponent } from './login/user-login/user-login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Admin Login
  { path: 'user-login', component: UserLoginComponent }, // User Login
  { path: '', redirectTo: 'user-login', pathMatch: 'full' }, // Default to User Login

  {
    path: 'login/forgotten-password',
    loadComponent: () => import('./login/forgotten-password/forgotten-password.component')
      .then(m => m.ForgottenPasswordComponent)
  },

  // 🔹 Admin Dashboard (Base Layout for Admin)
  {
    path: 'admin',
    component: BaseLayoutComponent, // Admin Base Layout
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
  },

  // 🔹 User Dashboard (Base Layout for Users)
  {
    path: 'user',
    component: UserBaseLayoutComponent, // User Base Layout
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
