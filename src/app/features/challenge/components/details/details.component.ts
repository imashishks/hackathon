import { Component, OnInit, ViewChild } from '@angular/core';
import { ChallengeService } from '../../../../shared/services/challenge/challenge.service';
import { ChallegeItem } from '../../../../shared/models/challenge.model';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap, map, switchMap } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'hack-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private challengeService: ChallengeService,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router,
    private datePipe: DatePipe
  ) {}
  submitConfig = {
    type: 'primary',
    disabled: false,
  };
  greetingsConfig = {
    header: [],
    subHeader: 'Here’s the details of the challenge. We know you can do this.',
  };

  selectedTab;
  challengeItem: ChallegeItem;
  challengeDetails;
  loaderConfig = {
    show: true,
    showFullScreen: true,
  };
  joinHandsData = [];
  leadersBoardData = [];
  ngOnInit(): void {
    this.selectedTab = this.getChallengeTabs()[0];
    // this.challengeItem = this.challengeService.getChallengeItem();
    console.log(this.getChallengeTabs());
    this.getChallengeItem();
  }
  getChallengeItem() {
    const result = this.activatedRoute.params.pipe(
      switchMap((data: any) => {
        return this.challengeService.getChallengeItem(data.id);
      })
    );
    result.subscribe((data) => {
      this.challengeItem = data.challengeDetails;
      this.greetingsConfig.header.push(this.challengeItem.title);

      this.formatJoinHandsData(data.joinHandsData);
      this.leadersBoardData = data.leadersBoardData;
      console.log(data);
      this.hideLoader();
    });
    console.log(result);
  }
  formatJoinHandsData(data) {
    this.joinHandsData = data.map((data) => {
      let d = { ...data };
      d.date = this.datePipe.transform(d.date, 'MMM d, y');
      return d;
    });
    console.log(this.joinHandsData);
  }
  getChallengeTabs() {
    return CHALLENGE_TABS;
  }
  getLeadersBoardColumns() {
    return LEADERBOARD_COLUMNS;
  }
  getJoinHandsColumns() {
    return JOINHANDS_COLUMNS;
  }

  tabClicked(tab) {
    this.selectedTab = tab;
    console.log(tab);
  }
  submitAnswer() {
    // to be built later
    this.showLoader();
    setTimeout(() => {
      this.snackBar.open('Your answer has been submitted successfully', '', {
        duration: environment.toastMessageTime,
        panelClass: 'success-snackbar',
      });
      this.router.navigate(['./challenge/list']);
      this.hideLoader();
    }, 4000);
  }
  private showLoader() {
    this.loaderConfig = { ...this.loaderConfig, ...{ show: true } };
  }
  private hideLoader() {
    this.loaderConfig = { ...this.loaderConfig, ...{ show: false } };
  }
}

const CHALLENGE_TABS = [
  {
    key: 'problem',
    value: 'Problem',
  },
  {
    key: 'joinhands',
    value: 'Joined Hands',
  },

  {
    key: 'leaderboard',
    value: 'Leaderboard',
  },
];

const LEADERBOARD_COLUMNS = [
  {
    key: 'name',
    value: 'Name',
  },
  {
    key: 'rank',
    value: 'Rank',
  },
  {
    key: 'score',
    value: 'Score',
  },
];

const JOINHANDS_COLUMNS = [
  {
    key: 'name',
    value: 'Name',
  },
  {
    key: 'date',
    value: 'Joined Hands on',
  },
];
