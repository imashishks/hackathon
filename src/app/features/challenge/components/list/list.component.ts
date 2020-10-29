import { Component, OnInit } from '@angular/core';
import { ChallengeService } from 'src/app/shared/services/challenge/challenge.service';
import { DataSharingService } from 'src/app/shared/services/data-sharing/data-sharing.service';

import {
  GreetingsModel,
  LoaderModel,
} from 'src/app/shared/models/config.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Observable } from 'rxjs';
import { ChallegeItem } from 'src/app/shared/models/challenge.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'hack-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(
    private challengeService: ChallengeService,
    private dataSharing: DataSharingService,
    private authService: AuthService
  ) {}
  listItem$: Observable<Array<ChallegeItem>>;
  greetingsConfig: GreetingsModel;
  loaderConfig: LoaderModel = {
    show: false,
    showFullScreen: true,
  };
  ngOnInit(): void {
    // this.challengeService.getChallengesList({}).subscribe((data) => {
    //   this.listItem = data;
    //   console.log(data);
    // });
    this.listItem$ = this.challengeService.getChallengesList({});
    console.log(this.listItem$);
    this.setGreetingsConfig();
  }
  setGreetingsConfig() {
    const user = this.authService.currentUserData;
    this.greetingsConfig = {
      header: ['Hello', user.name],
      subHeader: 'Welcome to Hack News',
      direction: 'Look at the open challenges for this month',
    };
  }
  challengeItemClicked(item) {
    console.log(item);
  }
}
