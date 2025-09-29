import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InflationCalculator } from './inflation-calculator';

describe('InflationCalculator', () => {
  let component: InflationCalculator;
  let fixture: ComponentFixture<InflationCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InflationCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InflationCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
