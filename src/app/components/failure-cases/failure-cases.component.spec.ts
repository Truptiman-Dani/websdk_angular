import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureCasesComponent } from './failure-cases.component';

describe('FailureCasesComponent', () => {
  let component: FailureCasesComponent;
  let fixture: ComponentFixture<FailureCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FailureCasesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FailureCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
