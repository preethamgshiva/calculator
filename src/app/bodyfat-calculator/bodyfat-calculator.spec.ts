import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyfatCalculator } from './bodyfat-calculator';

describe('BodyfatCalculator', () => {
  let component: BodyfatCalculator;
  let fixture: ComponentFixture<BodyfatCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyfatCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyfatCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
