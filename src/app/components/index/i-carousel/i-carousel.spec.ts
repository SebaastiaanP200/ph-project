import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ICarousel } from './i-carousel';

describe('ICarousel', () => {
  let component: ICarousel;
  let fixture: ComponentFixture<ICarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ICarousel],
    }).compileComponents();

    fixture = TestBed.createComponent(ICarousel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
