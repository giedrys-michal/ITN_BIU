import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsHeaderViewComponent } from './details-header-view.component';

describe('DetailsHeaderViewComponent', () => {
  let component: DetailsHeaderViewComponent;
  let fixture: ComponentFixture<DetailsHeaderViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsHeaderViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsHeaderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
