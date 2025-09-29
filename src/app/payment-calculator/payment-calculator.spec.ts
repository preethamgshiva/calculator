import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCalculator } from './payment-calculator';

describe('PaymentCalculator', () => {
  let component: PaymentCalculator;
  let fixture: ComponentFixture<PaymentCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
