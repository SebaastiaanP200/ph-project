import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TText } from './t-text';

describe('TText', () => {
  let component: TText;
  let fixture: ComponentFixture<TText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TText],
    }).compileComponents();

    fixture = TestBed.createComponent(TText);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
