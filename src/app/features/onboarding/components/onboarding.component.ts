import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
@Component({
  selector: 'hack-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
})
export class OnboardingComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  private ONBOARDING_TYPE = [
    {
      key: 'signup',
      value: 'Sign Up',
    },
    {
      key: 'login',
      value: 'Log In',
    },
  ];
  private ONBOARDING_INPUT_REF = {
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

  selectedTab: {
    key: string;
    value: string;
  };
  onboardingForm;
  ngOnInit(): void {
    this.selectedTab = this.ONBOARDING_TYPE[0];
    this.createFormBuilder();
  }
  createFormBuilder() {
    this.onboardingForm = {
      login: this.fb.group({
        employeeId: this.fb.control('', Validators.required),
        password: this.fb.control('', Validators.required),
      }),
      signup: this.fb.group({
        name: this.fb.control('', Validators.required),
        employeeId: this.fb.control('', Validators.required),
        emailId: this.fb.control('', [Validators.required, Validators.email]),
        password: this.fb.control('', Validators.required),
      }),
    };
  }
  getOnboardingType() {
    return this.ONBOARDING_TYPE;
  }
  tabClicked(selectedTab) {
    this.selectedTab = selectedTab;
  }
}
