import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnboardingComponent } from './features/onboarding/components/onboarding.component';
import { AuthGuard } from './shared/helpers/authguard/authguard.guard';
const routes: Routes = [
  {
    path: 'onboarding',
    // lazy loading not added as this is the default url anyway
    component: OnboardingComponent,
  },
  {
    path: 'challenge',
    canActivate: [AuthGuard],
    loadChildren: './features/challenge/challenge.module#ChallengeModule',
  },
  {
    path: '',
    redirectTo: '/onboarding',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/onboarding',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
