import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeCalculator } from './time-calculator';

describe('TimeCalculator', () => {
  let component: TimeCalculator;
  let fixture: ComponentFixture<TimeCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
