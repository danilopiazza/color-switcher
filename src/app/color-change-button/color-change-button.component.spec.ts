import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorChangeButtonComponent } from './color-change-button.component';

describe('ColorChangeButtonComponent', () => {
  let component: ColorChangeButtonComponent;
  let fixture: ComponentFixture<ColorChangeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorChangeButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorChangeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
