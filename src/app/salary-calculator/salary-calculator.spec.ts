import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryCalculator } from './salary-calculator';

describe('SalaryCalculator', () => {
  let component: SalaryCalculator;
  let fixture: ComponentFixture<SalaryCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalaryCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
