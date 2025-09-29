import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionCalculator } from './conversion-calculator';

describe('ConversionCalculator', () => {
  let component: ConversionCalculator;
  let fixture: ComponentFixture<ConversionCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConversionCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversionCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
