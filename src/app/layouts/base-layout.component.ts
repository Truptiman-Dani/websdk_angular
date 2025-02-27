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
        <!-- Sidebar -->
        <div class="sidebar">
            <button mat-button routerLink="/add-profile" routerLinkActive="active">+ Add Profile</button>
            <button mat-button routerLink="/view-profiles" routerLinkActive="active">View Profiles</button>
            <button mat-button routerLink="/create-users" routerLinkActive="active">Create Users</button>
            <button mat-button routerLink="/mis" routerLinkActive="active">MIS</button>
            <button mat-button routerLink="/summary" routerLinkActive="active">Summary</button>
            <button mat-button routerLink="/sanctioned-loans" routerLinkActive="active">Sanctioned Loans</button>
            <button mat-button routerLink="/incomplete" routerLinkActive="active">Incomplete</button>
            <button mat-button routerLink="/failure-cases" routerLinkActive="active">Failure Cases</button>
        </div>

        <!-- Main Content Area -->
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
  height: 100vh;
  background: #f4f7fc;
}

/* Sidebar Styling */
.sidebar {
  width: 280px;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
}

.sidebar button {
  width: 100%;
  text-align: left;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  padding: 12px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
}

.sidebar button:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* Highlight Active Route */
.sidebar .active {
  background: rgba(255, 255, 255, 0.3);
  font-weight: bold;
  border-left: 5px solid #ffcc00;
  padding-left: 16px;
}

/* Main Content */
.main-content {
  flex: 1;
  padding: 2rem;
  background: white;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}

  `]
})
export class BaseLayoutComponent { }
