import { NgModule } from '@angular/core';

import { ChallengeComponent } from './components/challenge.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChallengeRoutingModule } from './challenge-routing.module';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { ManageComponent } from './components/manage/manage.component';
import { ChallengeService } from 'src/app/shared/services/challenge/challenge.service';
import { DetailsComponent } from './components/details/details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    ChallengeComponent,
    ListComponent,
    AddComponent,
    DetailsComponent,
    ManageComponent,
  ],
  providers: [ChallengeService, DatePipe],
  imports: [SharedModule, ChallengeRoutingModule, ReactiveFormsModule],
})
export class ChallengeModule {}
