import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregnencyCalculator } from './pregnency-calculator';

describe('PregnencyCalculator', () => {
  let component: PregnencyCalculator;
  let fixture: ComponentFixture<PregnencyCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PregnencyCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PregnencyCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
