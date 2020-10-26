import { NgModule } from '@angular/core';
import { OnboardingComponent } from './components/onboarding.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [OnboardingComponent],
  imports: [SharedModule],
  providers: [],
})
export class OnboardingModule {}
