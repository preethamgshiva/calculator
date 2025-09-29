import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesTaxCalculator } from './sales-tax-calculator';

describe('SalesTaxCalculator', () => {
  let component: SalesTaxCalculator;
  let fixture: ComponentFixture<SalesTaxCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesTaxCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesTaxCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
