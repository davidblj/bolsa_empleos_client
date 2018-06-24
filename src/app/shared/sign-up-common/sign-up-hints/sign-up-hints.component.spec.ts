import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpHintsComponent } from './sign-up-hints.component';

describe('SignUpHintsComponent', () => {
  let component: SignUpHintsComponent;
  let fixture: ComponentFixture<SignUpHintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpHintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpHintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
