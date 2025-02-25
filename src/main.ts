import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { LoginComponent } from './app/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent],
  template: '<app-login></app-login>'
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideAnimations()
  ]
}).catch(err => console.error(err));