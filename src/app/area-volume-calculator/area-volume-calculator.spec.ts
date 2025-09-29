import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaVolumeCalculator } from './area-volume-calculator';

describe('AreaVolumeCalculator', () => {
  let component: AreaVolumeCalculator;
  let fixture: ComponentFixture<AreaVolumeCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaVolumeCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaVolumeCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
