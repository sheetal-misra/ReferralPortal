import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RRefferalsComponent } from './r-refferals.component';

describe('RRefferalsComponent', () => {
  let component: RRefferalsComponent;
  let fixture: ComponentFixture<RRefferalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RRefferalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RRefferalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
