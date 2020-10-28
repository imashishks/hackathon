import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ButtonModel, LoaderModel } from '../../../shared/models/config.model';

import { AuthService } from '../../../shared/services/auth/auth.service';
import { LoginPayload } from '../../../shared/models/onboarding.model';
@Component({
  selector: 'hack-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
})
export class OnboardingComponent implements OnInit {
  constructor(private fb: FormBuilder, private authService: AuthService) {}
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
  btnConfig: ButtonModel = {
    type: 'primary',
    disabled: false,
  };
  loaderConfig: LoaderModel = {
    show: false,
    showFullScreen: true,
  };
  onboardingForm: { login; signup };
  onboardingFormProps: Array<string>;
  onboardingInputRef = this.getOnboardingInputRef();

  ngOnInit(): void {
    this.selectedTab = this.ONBOARDING_TYPE[0];
    this.createFormBuilder();
    this.onboardingFormProps = Object.keys(
      this.onboardingForm[this.selectedTab.key].controls
    );
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
  getOnboardingInputRef() {
    return this.ONBOARDING_INPUT_REF;
  }
  tabClicked(selectedTab, formDirective: FormGroupDirective): void {
    this.selectedTab = selectedTab;
    this.onboardingFormProps = Object.keys(
      this.onboardingForm[this.selectedTab.key].controls
    );
    formDirective.resetForm();
    this.onboardingForm[this.selectedTab.key].reset();
  }
  onboardingBtnClicked(formDirective: FormGroupDirective): void {
    const formDataStatus = this.onboardingForm[this.selectedTab.key].status;

    if (formDataStatus === 'VALID') {
      this.loaderConfig = { ...this.loaderConfig, ...{ show: true } };
      this.selectedTab.key === 'signup'
        ? this.handleSignupServiceReq(this.selectedTab.key)
        : this.handleLoginServiceReq(this.selectedTab.key);
    }
  }
  handleLoginServiceReq(type: string) {
    // handle login service
    console.log(this.onboardingForm[this.selectedTab.key]);
    const payload = this.onboardingForm[type].value;
    this.authService.login(payload).subscribe((user) => {
      this.loaderConfig = { ...this.loaderConfig, ...{ show: false } };
      console.log(user);
    });
  }
  handleSignupServiceReq(type: string) {
    // handle signup service
    const payload = this.onboardingForm[type].value;
    this.authService.signup(payload).subscribe((user) => {
      this.loaderConfig = { ...this.loaderConfig, ...{ show: false } };
      console.log(user);
    });
  }
}
