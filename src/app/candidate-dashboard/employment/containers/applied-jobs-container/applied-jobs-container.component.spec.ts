import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedJobsContainerComponent } from './applied-jobs-container.component';

describe('AppliedJobsContainerComponent', () => {
  let component: AppliedJobsContainerComponent;
  let fixture: ComponentFixture<AppliedJobsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliedJobsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedJobsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
