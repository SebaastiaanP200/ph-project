import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PImage } from './p-image';

describe('PImage', () => {
  let component: PImage;
  let fixture: ComponentFixture<PImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PImage],
    }).compileComponents();

    fixture = TestBed.createComponent(PImage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
