import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingComponent } from './onboarding.component';

describe('OnboardingComponent', () => {
  let component: OnboardingComponent;
  let fixture: ComponentFixture<OnboardingComponent>;
  let onboardingType = [
    {
      key: 'signup',
      value: 'Sign Up',
    },
    {
      key: 'login',
      value: 'Log In',
    },
  ];
  let onboardingInputReference = {
    name: {
      label: 'Name',
      type: 'text',
    },
    employeeId: {
      label: 'Employee ID',
      type: 'text',
    },
    emailId: {
      label: 'Email ID',
      type: 'text',
    },
    password: {
      label: 'Password',
      type: 'password',
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OnboardingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Onboarding: should create', () => {
    expect(component).toBeTruthy();
  });
  it('Onboarding: should have an private Onboarding type array', () => {
    // @ts-ignore
    expect(component.ONBOARDING_TYPE).toEqual(onboardingType);
  });
  it('Onboarding: should have a list of inputs', () => {
    // @ts-ignore
    expect(component.ONBOARDING_INPUT_REF).toEqual(onboardingInputReference);
  });
  it('Onboarding: should select the signup tab by default', () => {
    component.ngOnInit();
    // @ts-ignore
    expect(component.selectedTab).toEqual(component.ONBOARDING_TYPE[0]);
  });
  it('Onboarding: should select the signup tab by default', () => {
    component.ngOnInit();
    // @ts-ignore
    expect(component.selectedTab).toEqual(component.ONBOARDING_TYPE[0]);
  });
});
