import { NgModule } from '@angular/core';
import { OnboardingModule } from '../features/onboarding/onboarding.module';
import { HttpService } from '../shared/services/http/http.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [],
  imports: [OnboardingModule, HttpClientModule],
  exports: [OnboardingModule],
  providers: [HttpService],
})
export class CoreModule {}
