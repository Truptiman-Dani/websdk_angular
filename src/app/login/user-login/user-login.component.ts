import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-login',
  standalone: true,
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  imports: [
    NgIf,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class UserLoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      mobileNumber: [
        '', 
        [Validators.required, Validators.pattern('^[0-9]{10}$')] // 10-digit validation
      ]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('User login with:', this.loginForm.value.mobileNumber);
      
      // Save user session (optional)
      localStorage.setItem('userMobile', this.loginForm.value.mobileNumber);

      // Redirect to View Profiles under User Base Layout
      this.router.navigate(['/user/view-profiles']);
    }
  }
}
