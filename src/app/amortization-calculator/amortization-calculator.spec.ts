import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmortizationCalculator } from './amortization-calculator';

describe('AmortizationCalculator', () => {
  let component: AmortizationCalculator;
  let fixture: ComponentFixture<AmortizationCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmortizationCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmortizationCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
