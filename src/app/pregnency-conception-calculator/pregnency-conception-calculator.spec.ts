import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregnencyConceptionCalculator } from './pregnency-conception-calculator';

describe('PregnencyConceptionCalculator', () => {
  let component: PregnencyConceptionCalculator;
  let fixture: ComponentFixture<PregnencyConceptionCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PregnencyConceptionCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PregnencyConceptionCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
