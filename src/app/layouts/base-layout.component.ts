import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-base-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule],
  template: `
    <div class="dashboard-container">
      <div class="top-bar">
        <img src="assets/whatsloan.png" alt="WhatsLoan" class="logo">
        <span class="user-name">Timmana Gouda</span>
      </div>
      
      <div class="content">
        <div class="sidebar">
          <button mat-button routerLink="/add-profile">+ Add Profile</button>
          <button mat-button routerLink="/view-profiles">View Profiles</button>
          <button mat-button routerLink="/create-users">Create Users</button>
          <button mat-button routerLink="/mis">MIS</button>
          <button mat-button routerLink="/summary">Summary</button>
          <button mat-button routerLink="/sanctioned-loans">Sanctioned Loans</button>
          <button mat-button routerLink="/incomplete">Incomplete</button>
          <button mat-button routerLink="/failure-cases">Failure Cases</button>
        </div>
        
        <div class="main-content">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styles: [
    `.dashboard-container {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }

    .top-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      background: white;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .logo {
      height: 40px;
    }

    .content {
      display: flex;
      flex: 1;
    }

    .sidebar {
      width: 250px;
      background: linear-gradient(135deg, #004080 0%, #1a0033 100%);
      padding: 1rem;
      display: flex;
      flex-direction: column;
    }

    .sidebar button {
      text-align: left;
      color: white;
    }

    .main-content {
      flex: 1;
      padding: 2rem;
    }
  `]
})
export class BaseLayoutComponent {}
