import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsListViewComponent } from './groups-list-view.component';

describe('GroupsListViewComponent', () => {
  let component: GroupsListViewComponent;
  let fixture: ComponentFixture<GroupsListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupsListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
