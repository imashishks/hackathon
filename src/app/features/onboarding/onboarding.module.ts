import { NgModule } from '@angular/core';
import { OnboardingComponent } from './components/onboarding.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [OnboardingComponent],
  imports: [SharedModule, ReactiveFormsModule],
  providers: [],
})
export class OnboardingModule {}
