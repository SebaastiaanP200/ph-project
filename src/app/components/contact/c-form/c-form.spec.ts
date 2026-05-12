import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CForm } from './c-form';

describe('CForm', () => {
  let component: CForm;
  let fixture: ComponentFixture<CForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CForm],
    }).compileComponents();

    fixture = TestBed.createComponent(CForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
