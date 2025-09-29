import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCalculator } from './simple-calculator';

describe('SimpleCalculator', () => {
  let component: SimpleCalculator;
  let fixture: ComponentFixture<SimpleCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
