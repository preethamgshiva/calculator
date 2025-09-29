import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursCalculator } from './hours-calculator';

describe('HoursCalculator', () => {
  let component: HoursCalculator;
  let fixture: ComponentFixture<HoursCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoursCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoursCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
