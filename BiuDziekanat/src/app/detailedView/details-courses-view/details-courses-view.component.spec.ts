import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCoursesViewComponent } from './details-courses-view.component';

describe('DetailsCoursesViewComponent', () => {
  let component: DetailsCoursesViewComponent;
  let fixture: ComponentFixture<DetailsCoursesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCoursesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCoursesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
