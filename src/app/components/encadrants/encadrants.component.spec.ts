import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncadrantsComponent } from './encadrants.component';

describe('EncadrantsComponent', () => {
  let component: EncadrantsComponent;
  let fixture: ComponentFixture<EncadrantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncadrantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncadrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
