import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsMainViewComponent } from './groups-main-view.component';

describe('GroupsMainViewComponent', () => {
  let component: GroupsMainViewComponent;
  let fixture: ComponentFixture<GroupsMainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupsMainViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
