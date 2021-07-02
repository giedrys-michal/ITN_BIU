import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsGroupsViewComponent } from './details-groups-view.component';

describe('DetailsGroupsViewComponent', () => {
  let component: DetailsGroupsViewComponent;
  let fixture: ComponentFixture<DetailsGroupsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsGroupsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsGroupsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
