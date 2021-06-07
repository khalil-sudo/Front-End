import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEncComponent } from './add-edit-enc.component';

describe('AddEditEncComponent', () => {
  let component: AddEditEncComponent;
  let fixture: ComponentFixture<AddEditEncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditEncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
