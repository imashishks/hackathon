import { NgModule } from '@angular/core';
import { OnboardingModule } from '../features/onboarding/onboarding.module';
import { HttpService } from '../shared/services/http/http.service';
import { HttpClientModule } from '@angular/common/http';
import { ChallengeModule } from '../features/challenge/challenge.module';

@NgModule({
  declarations: [],
  imports: [OnboardingModule, HttpClientModule],
  exports: [OnboardingModule],
  providers: [HttpService],
})
export class CoreModule {}
