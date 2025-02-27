import { Routes } from '@angular/router';
import { BaseLayoutComponent } from './layouts/base-layout.component';
import { ViewProfilesComponent } from './components/view-profiles.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Explicit login path
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect empty path to login
  {
    path: 'app',
    component: BaseLayoutComponent,
    children: [
      { path: 'view-profiles', component: ViewProfilesComponent },
      { path: '', redirectTo: 'view-profiles', pathMatch: 'full' } // Default child route
    ]
  }
];
