import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpWarningsComponent } from './sign-up-warnings.component';

describe('SignUpWarningsComponent', () => {
  let component: SignUpWarningsComponent;
  let fixture: ComponentFixture<SignUpWarningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpWarningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpWarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
