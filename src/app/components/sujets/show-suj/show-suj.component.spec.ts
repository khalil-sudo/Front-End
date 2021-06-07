import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSujComponent } from './show-suj.component';

describe('ShowSujComponent', () => {
  let component: ShowSujComponent;
  let fixture: ComponentFixture<ShowSujComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSujComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSujComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
