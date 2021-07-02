import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsContainerViewComponent } from './details-container-view.component';

describe('DetailsContainerViewComponent', () => {
  let component: DetailsContainerViewComponent;
  let fixture: ComponentFixture<DetailsContainerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsContainerViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsContainerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
