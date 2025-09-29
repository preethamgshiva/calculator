import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FractionCalculator } from './fraction-calculator';

describe('FractionCalculator', () => {
  let component: FractionCalculator;
  let fixture: ComponentFixture<FractionCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FractionCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FractionCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
