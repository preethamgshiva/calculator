import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCalculator } from './date-calculator';

describe('DateCalculator', () => {
  let component: DateCalculator;
  let fixture: ComponentFixture<DateCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
