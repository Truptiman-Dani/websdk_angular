import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanctionedLoansComponent } from './sanctioned-loans.component';

describe('SanctionedLoansComponent', () => {
  let component: SanctionedLoansComponent;
  let fixture: ComponentFixture<SanctionedLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SanctionedLoansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SanctionedLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
