import { NgModule } from '@angular/core';

import { ChallengeComponent } from './components/challenge.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChallengeRoutingModule } from './challenge-routing.module';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { ManageComponent } from './components/manage/manage.component';
import { ChallengeService } from 'src/app/shared/services/challenge/challenge.service';

@NgModule({
  declarations: [
    ChallengeComponent,
    ListComponent,
    AddComponent,
    ManageComponent,
  ],
  providers: [ChallengeService],
  imports: [SharedModule, ChallengeRoutingModule],
})
export class ChallengeModule {}
