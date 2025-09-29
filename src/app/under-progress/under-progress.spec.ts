import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderProgress } from './under-progress';

describe('UnderProgress', () => {
  let component: UnderProgress;
  let fixture: ComponentFixture<UnderProgress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderProgress]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderProgress);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
