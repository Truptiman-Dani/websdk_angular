import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-profiles',
  standalone: true,
  imports: [
    CommonModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatTableModule, 
    MatIconModule, 
    MatPaginatorModule,
    MatSortModule
  ],
  template: `
    <div class="view-profiles">
      <h2>Applicants</h2>
      
      <!-- Search Input -->
      <mat-form-field appearance="outline" class="search-box">
        <input matInput placeholder="Search Applicant by Name / Customer ID" (keyup)="applyFilter($event)">
        <mat-icon matSuffix>search</mat-icon>
      </mat-form-field>
      
      <!-- Table -->
      <table mat-table [dataSource]="dataSource" matSort class="applicants-table">
      
        <!-- Sr No Column -->
        <ng-container matColumnDef="srNo">
          <th mat-header-cell *matHeaderCellDef mat-sort-header> Sr. No. </th>
          <td mat-cell *matCellDef="let element"> {{element.srNo}} </td>
        </ng-container>

        <!-- Profile ID Column -->
        <ng-container matColumnDef="profileId">
          <th mat-header-cell *matHeaderCellDef mat-sort-header> Profile ID </th>
          <td mat-cell *matCellDef="let element"> {{element.profileId}} </td>
        </ng-container>

        <!-- Name Column -->
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>
          <td mat-cell *matCellDef="let element"> {{element.name}} </td>
        </ng-container>

        <!-- Mobile No Column -->
        <ng-container matColumnDef="mobile">
          <th mat-header-cell *matHeaderCellDef mat-sort-header> Mobile No. </th>
          <td mat-cell *matCellDef="let element"> {{element.mobile}} </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>

      <!-- Pagination -->
      <mat-paginator [pageSizeOptions]="[5, 10, 20]" showFirstLastButtons></mat-paginator>
    </div>
  `,
  styles: [
    `.view-profiles {
      padding: 1rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .search-box {
      width: 100%;
      margin-bottom: 1rem;
    }

    .applicants-table {
      width: 100%;
      margin-top: 1rem;
    }
  `]
})
export class ViewProfilesComponent {
  displayedColumns: string[] = ['srNo', 'profileId', 'name', 'mobile'];
  dataSource = new MatTableDataSource([
    { srNo: 1, profileId: 'P12345', name: 'John Doe', mobile: '9876543210' },
    { srNo: 2, profileId: 'P67890', name: 'Jane Smith', mobile: '9876543220' },
    { srNo: 3, profileId: 'P11223', name: 'Alice Brown', mobile: '9876543230' },
    { srNo: 4, profileId: 'P33445', name: 'Bob Johnson', mobile: '9876543240' },
    { srNo: 5, profileId: 'P55667', name: 'Charlie Williams', mobile: '9876543250' }
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
