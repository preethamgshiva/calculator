import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdealweightCalculator } from './idealweight-calculator';

describe('IdealweightCalculator', () => {
  let component: IdealweightCalculator;
  let fixture: ComponentFixture<IdealweightCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdealweightCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdealweightCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
