import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmrCalculator } from './bmr-calculator';

describe('BmrCalculator', () => {
  let component: BmrCalculator;
  let fixture: ComponentFixture<BmrCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BmrCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmrCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
