import { Component, OnInit } from '@angular/core';
import { ChallengeService } from 'src/app/shared/services/challenge/challenge.service';
import { DataSharingService } from 'src/app/shared/services/data-sharing/data-sharing.service';
import { GreetingsModel } from 'src/app/shared/models/config.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

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
  greetingsConfig: GreetingsModel;
  ngOnInit(): void {
    let listItems = this.challengeService.getChallengesList({});
    this.setGreetingsConfig();
    console.log(listItems);
  }
  setGreetingsConfig() {
    const user = this.authService.currentUserData;
    this.greetingsConfig = {
      header: ['Hello', user.name],
      subHeader: 'Welcome to Hack News',
      direction: 'Look at the open challenges for this month',
    };
  }
}
