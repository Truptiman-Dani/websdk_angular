import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent {
  profileType: string = '';
  profileName: string = '';
  profileEmail: string = '';
  profileMobile: string = '';

  submitProfile() {
    console.log('Profile Submitted:', { 
      profileType: this.profileType,
      profileName: this.profileName,
      profileEmail: this.profileEmail,
      profileMobile: this.profileMobile
    });
  }
}