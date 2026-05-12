import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TImage } from './t-image';

describe('TImage', () => {
  let component: TImage;
  let fixture: ComponentFixture<TImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TImage],
    }).compileComponents();

    fixture = TestBed.createComponent(TImage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
