import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevreffComponent } from './prevreff.component';

describe('PrevreffComponent', () => {
  let component: PrevreffComponent;
  let fixture: ComponentFixture<PrevreffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevreffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevreffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
