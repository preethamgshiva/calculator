import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubnetCalculator } from './subnet-calculator';

describe('SubnetCalculator', () => {
  let component: SubnetCalculator;
  let fixture: ComponentFixture<SubnetCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubnetCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubnetCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
