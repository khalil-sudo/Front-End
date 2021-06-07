import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditStaComponent } from './add-edit-sta.component';

describe('AddEditStaComponent', () => {
  let component: AddEditStaComponent;
  let fixture: ComponentFixture<AddEditStaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditStaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditStaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
