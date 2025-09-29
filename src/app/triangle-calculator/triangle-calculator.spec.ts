import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriangleCalculator } from './triangle-calculator';

describe('TriangleCalculator', () => {
  let component: TriangleCalculator;
  let fixture: ComponentFixture<TriangleCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TriangleCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriangleCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
