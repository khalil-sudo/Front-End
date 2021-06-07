import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSujComponent } from './add-edit-suj.component';

describe('AddEditSujComponent', () => {
  let component: AddEditSujComponent;
  let fixture: ComponentFixture<AddEditSujComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSujComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSujComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
