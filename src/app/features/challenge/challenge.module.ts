import { NgModule } from '@angular/core';

import { ChallengeComponent } from './components/challenge.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChallengeRoutingModule } from './challenge-routing.module';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { ManageComponent } from './components/manage/manage.component';

@NgModule({
  declarations: [
    ChallengeComponent,
    ListComponent,
    AddComponent,
    ManageComponent,
  ],
  imports: [SharedModule, ChallengeRoutingModule],
})
export class ChallengeModule {}
