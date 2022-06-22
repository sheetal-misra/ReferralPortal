import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeePostingComponent } from './see-posting.component';

describe('SeePostingComponent', () => {
  let component: SeePostingComponent;
  let fixture: ComponentFixture<SeePostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeePostingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeePostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
