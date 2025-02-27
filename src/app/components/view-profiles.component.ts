import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-view-profiles',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatIconModule],
  template: `
    <div class="view-profiles">
      <h2>Applicants</h2>
      <mat-form-field appearance="outline" class="search-box">
        <input matInput placeholder="Search Applicant by Name / Customer ID">
        <mat-icon matSuffix>search</mat-icon>
      </mat-form-field>
      
      <table mat-table [dataSource]="data" class="applicants-table">
        <ng-container matColumnDef="srNo">
          <th mat-header-cell *matHeaderCellDef>Sr. No.</th>
          <td mat-cell *matCellDef="let element">{{element.srNo}}</td>
        </ng-container>
        <ng-container matColumnDef="profileId">
          <th mat-header-cell *matHeaderCellDef>Profile ID</th>
          <td mat-cell *matCellDef="let element">{{element.profileId}}</td>
        </ng-container>
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef>Name</th>
          <td mat-cell *matCellDef="let element">{{element.name}}</td>
        </ng-container>
        <ng-container matColumnDef="mobile">
          <th mat-header-cell *matHeaderCellDef>Mobile No.</th>
          <td mat-cell *matCellDef="let element">{{element.mobile}}</td>
        </ng-container>
        
        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
    </div>
  `,
  styles: [
    `.view-profiles {
      padding: 2rem;
    }

    .search-box {
      width: 100%;
      margin-bottom: 1rem;
    }

    .applicants-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1rem;
    }
  `]
})
export class ViewProfilesComponent {
  displayedColumns: string[] = ['srNo', 'profileId', 'name', 'mobile'];
  data = [
    { srNo: 1, profileId: 'P12345', name: 'John Doe', mobile: '9876543210' },
    { srNo: 2, profileId: 'P67890', name: 'Jane Smith', mobile: '9876543220' }
  ];
}

