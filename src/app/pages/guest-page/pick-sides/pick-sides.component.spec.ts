import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickSidesComponent } from './pick-sides.component';

describe('PickSidesComponent', () => {
  let component: PickSidesComponent;
  let fixture: ComponentFixture<PickSidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickSidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickSidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
