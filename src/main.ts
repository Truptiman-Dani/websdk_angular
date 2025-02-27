import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { RouterModule } from '@angular/router';  // ✅ Import RouterModule
import { routes } from './app/app-routing.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],  // ✅ Import RouterModule for router-outlet
  template: '<router-outlet></router-outlet>'  // ✅ Enable routing
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideAnimations(),
    provideRouter(routes)  // ✅ Provide routing configuration
  ]
}).catch(err => console.error(err));
