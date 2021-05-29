import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMainViewComponent } from './details-main-view.component';

describe('DetailsMainViewComponent', () => {
  let component: DetailsMainViewComponent;
  let fixture: ComponentFixture<DetailsMainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsMainViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
