import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      // justify-content: center;
      background:white solid;
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

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form submitted:', this.loginForm.value);
      // Add your login logic here
    }
  }
}
