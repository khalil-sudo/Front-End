import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStaComponent } from './show-sta.component';

describe('ShowStaComponent', () => {
  let component: ShowStaComponent;
  let fixture: ComponentFixture<ShowStaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowStaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowStaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
