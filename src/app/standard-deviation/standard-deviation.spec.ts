import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardDeviation } from './standard-deviation';

describe('StandardDeviation', () => {
  let component: StandardDeviation;
  let fixture: ComponentFixture<StandardDeviation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardDeviation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandardDeviation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
