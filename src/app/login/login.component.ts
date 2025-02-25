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
    <div class="login-container">
      <div class="logo-container">
        <img src="assets/whatsloan-logo.png" alt="WhatsLoan" class="logo">
      </div>
      <div class="login-card">
        <h2>Login</h2>
        <p class="subtitle">Login to Upload/Validate or view Profiles</p>
        
        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
          <mat-form-field appearance="outline" class="full-width">
            <input matInput formControlName="username" placeholder="9900390180">
            <mat-error *ngIf="loginForm.get('username')?.hasError('required')">
              Username is required
            </mat-error>
          </mat-form-field>

          <mat-form-field appearance="outline" class="full-width">
            <input matInput type="password" formControlName="password" placeholder="********">
            <mat-error *ngIf="loginForm.get('password')?.hasError('required')">
              Password is required
            </mat-error>
          </mat-form-field>

          <button mat-raised-button color="primary" class="full-width login-button" type="submit">
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
  `
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