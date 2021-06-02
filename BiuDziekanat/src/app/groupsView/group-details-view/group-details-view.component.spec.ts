import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDetailsViewComponent } from './group-details-view.component';

describe('GroupDetailsViewComponent', () => {
  let component: GroupDetailsViewComponent;
  let fixture: ComponentFixture<GroupDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupDetailsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
