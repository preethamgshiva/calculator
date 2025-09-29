import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuedateCalculator } from './duedate-calculator';

describe('DuedateCalculator', () => {
  let component: DuedateCalculator;
  let fixture: ComponentFixture<DuedateCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuedateCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuedateCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
