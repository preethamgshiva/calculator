import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalorieCalculator } from './calorie-calculator';

describe('CalorieCalculator', () => {
  let component: CalorieCalculator;
  let fixture: ComponentFixture<CalorieCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalorieCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalorieCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
