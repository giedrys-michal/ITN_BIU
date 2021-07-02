import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesMainViewComponent } from './courses-main-view.component';

describe('CoursesMainViewComponent', () => {
  let component: CoursesMainViewComponent;
  let fixture: ComponentFixture<CoursesMainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesMainViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
