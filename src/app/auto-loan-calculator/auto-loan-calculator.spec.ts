import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoLoanCalculator } from './auto-loan-calculator';

describe('AutoLoanCalculator', () => {
  let component: AutoLoanCalculator;
  let fixture: ComponentFixture<AutoLoanCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoLoanCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoLoanCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
