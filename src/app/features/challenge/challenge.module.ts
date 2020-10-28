import { NgModule } from '@angular/core';

import { ChallengeComponent } from './challenge.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChallengeRoutingModule } from './challenge-routing.module';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [ChallengeComponent, ListComponent],
  imports: [SharedModule, ChallengeRoutingModule],
})
export class ChallengeModule {}
