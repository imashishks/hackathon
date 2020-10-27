import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OnboardingComponent } from './onboarding.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MatTabLink } from '@angular/material/tabs';
import { logging } from 'protractor';

describe('OnboardingComponent', () => {
  let component: OnboardingComponent;
  let fixture: ComponentFixture<OnboardingComponent>;
  const onboardingType = [
    {
      key: 'signup',
      value: 'Sign Up',
    },
    {
      key: 'login',
      value: 'Log In',
    },
  ];

  const onboardingInputReference = {
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
  let tabBtn: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OnboardingComponent],
      providers: [FormBuilder],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingComponent);
    // let fb = new FormBuilder();
    component = fixture.componentInstance;
    fixture.detectChanges();
    tabBtn = fixture.debugElement.query(By.css('.activeTab'));
    console.log(tabBtn.nativeElement);
  });

  it('Organisation component should be created', () => {
    expect(component).toBeTruthy();
  });
  it('should have an private Onboarding type array', () => {
    // @ts-ignore
    expect(component.ONBOARDING_TYPE).toEqual(onboardingType);
  });

  it('should have a list of inputs', () => {
    // @ts-ignore
    expect(component.ONBOARDING_INPUT_REF).toEqual(onboardingInputReference);
  });

  it('should have the correct tabs rendered', () => {
    const expectedTabLabels = ['Log In', 'Sign Up'];
    fixture.whenRenderingDone().then(() => {
      const tabLabels = document.querySelectorAll('.mat-tab-link');
      Array.from(tabLabels).forEach((element) => {
        expect(expectedTabLabels).toContain(element.textContent.trim());
      });
    });
  });

  it('should select the signup tab by default', () => {
    component.ngOnInit();
    // @ts-ignore
    expect(component.selectedTab).toEqual(onboardingType[0]);
    expect(tabBtn.nativeElement.textContent.trim()).toBe('Sign Up');
  });

  it('should render the correct tab labels when tab is clicked', () => {
    component.ngOnInit();

    // try clicking login
    component.tabClicked(onboardingType[1]);
    expect(component.selectedTab).toEqual(onboardingType[1]);
    fixture.detectChanges();

    fixture
      .whenRenderingDone()
      .then(() => {
        tabBtn = fixture.debugElement.query(By.css('.activeTab'));
        expect(tabBtn.nativeElement.textContent.trim()).toBe('Log In');
        // emulating the sign up click
        component.tabClicked(onboardingType[0]);
        expect(component.selectedTab).toEqual(onboardingType[0]);
        fixture.detectChanges();
        return fixture.whenRenderingDone();
      })
      .then(() => {
        tabBtn = fixture.debugElement.query(By.css('.activeTab'));
        expect(tabBtn.nativeElement.textContent.trim()).toBe('Sign Up');
      });
  });

  it('created form groups instaces should be of FormGroup type', () => {
    component.ngOnInit();
    expect(component.onboardingForm.login instanceof FormGroup).toBeTruthy();
    expect(component.onboardingForm.signup instanceof FormGroup).toBeTruthy();
  });
});
