import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEncComponent } from './show-enc.component';

describe('ShowEncComponent', () => {
  let component: ShowEncComponent;
  let fixture: ComponentFixture<ShowEncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowEncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
