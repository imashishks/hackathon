import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hack-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
})
export class OnboardingComponent implements OnInit {
  constructor() {}
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

  ngOnInit(): void {
    this.selectedTab = this.ONBOARDING_TYPE[0];
  }
}
