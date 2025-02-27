import { Routes } from '@angular/router';
import { BaseLayoutComponent } from './layouts/base-layout.component';
import { ViewProfilesComponent } from './components/view-profiles.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },  // Default route - login page
  {
    path: 'app',
    component: BaseLayoutComponent,
    children: [
      { path: 'view-profiles', component: ViewProfilesComponent },
      { path: '', redirectTo: 'view-profiles', pathMatch: 'full' }  // Default child route
    ]
  }
];
