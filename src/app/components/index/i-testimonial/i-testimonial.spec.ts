import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITestimonial } from './i-testimonial';

describe('ITestimonial', () => {
  let component: ITestimonial;
  let fixture: ComponentFixture<ITestimonial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ITestimonial],
    }).compileComponents();

    fixture = TestBed.createComponent(ITestimonial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
