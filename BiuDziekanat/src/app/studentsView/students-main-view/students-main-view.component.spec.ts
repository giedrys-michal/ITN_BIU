import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsMainViewComponent } from './students-main-view.component';

describe('StudentsMainViewComponent', () => {
  let component: StudentsMainViewComponent;
  let fixture: ComponentFixture<StudentsMainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsMainViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
