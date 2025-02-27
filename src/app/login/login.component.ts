import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router for navigation
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  template: `
    <div class="top-bar">
      <img src="assets/whatsloan.png" alt="WhatsLoan" class="logo">
    </div>

    <div class="login-container">
      <div class="login-card">
        <h2>Login</h2>
        <p class="subtitle">Login to Upload/Validate or view Profiles</p>
        
        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
          <mat-form-field appearance="outline" class="full-width">
            <input matInput formControlName="username" placeholder="Please enter your mobile number">
            <mat-error *ngIf="loginForm.get('username')?.hasError('required')">
              Mobile number is required
            </mat-error>
          </mat-form-field>

          <mat-form-field appearance="outline" class="full-width">
            <input matInput type="password" formControlName="password" placeholder="Please enter your password">
            <mat-error *ngIf="loginForm.get('password')?.hasError('required')">
              Password is required
            </mat-error>
          </mat-form-field>

          <button mat-raised-button color="primary" class="login-button" type="submit">
            Login
          </button>

          <div class="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>

          <div class="login-as-user">
            <span>Login as User? </span>
            <a mat-button color="primary" href="#">Login Here</a>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .top-bar {
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      background: white;
      padding: 0 1rem;
    }

    .logo {
      height: 40px;
      padding: 1rem;
    }

    .login-container {
      min-height: calc(100vh - 60px);
      background: linear-gradient(135deg, #004080 0%, #1a0033 100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }

    .login-card {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;
      margin-top: -6rem;
    }

    .full-width {
      width: 100%;
    }
  `]
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { // Inject Router
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
  
      // Add a 10-second delay before authentication
      setTimeout(() => {
        // Mock Authentication (Replace this with API call)
        if (username === '1234567890' && password === 'admin123') {
          console.log('Login successful:', this.loginForm.value);
          this.router.navigate(['/app/view-profiles']); // Redirect after login
        } else {
          alert('Invalid username or password. Try again.');
        }
      }, 10000); // 10000 milliseconds = 10 seconds
    }
  }
  
}
