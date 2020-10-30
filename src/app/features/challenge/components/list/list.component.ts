import { Component, OnInit } from '@angular/core';
import { ChallengeService } from 'src/app/shared/services/challenge/challenge.service';
import { DataSharingService } from 'src/app/shared/services/data-sharing/data-sharing.service';

import {
  GreetingsModel,
  LoaderModel,
  HackObj,
} from 'src/app/shared/models/config.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Observable } from 'rxjs';
import { ChallegeItem } from 'src/app/shared/models/challenge.model';
import { map } from 'rxjs/operators';
import { UtilService } from 'src/app/shared/services/util/util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'hack-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(
    private challengeService: ChallengeService,
    private dataSharing: DataSharingService,
    private router: Router,
    private authService: AuthService,
    private utilService: UtilService
  ) {}
  challengeData: Array<ChallegeItem> = [];
  greetingsConfig: GreetingsModel;
  loaderConfig: LoaderModel = {
    show: true,
    showFullScreen: true,
  };
  sortFilter = {
    title: 'SORT BY',
    type: 'radio',
    data: [
      {
        key: 'upVotes',
        value: 'Votes',
      },
      {
        key: 'successRate',
        value: 'Success Rate',
      },
      {
        key: 'maxScore',
        value: 'Max Score',
      },
      {
        key: 'dateCreated',
        value: 'Date Created',
      },
    ],
  };
  difficultyFilter = {
    title: 'DIFFICULTY',
    type: 'checkbox',
    data: [
      {
        key: 'easy',
        value: 'Easy',
      },
      {
        key: 'medium',
        value: 'Medium',
      },
      {
        key: 'hard',
        value: 'Hard',
      },
    ],
  };
  setSelectedsortByKey = '';
  tagsFilter = {
    title: 'TAGS',
    type: 'checkbox',
    data: [],
    scrollable: true,
  };
  filterList = {
    page: 1,
    limit: 10,
    sortBy: '',
    difficulty: [],
    tags: [],
  };
  displayData = [];
  ngOnInit(): void {
    // this.challengeService.getChallengesList({}).subscribe((data) => {
    //   this.listItem = data;
    //   console.log(data);
    // });
    this.getTags();
    this.getChallengeList(this.filterList);
    this.setGreetingsConfig();
  }

  getChallengeList(filterList) {
    this.loaderConfig = { ...this.loaderConfig, ...{ show: true } };
    this.challengeService.getChallengesList(filterList).subscribe((data) => {
      this.challengeData = data;
      this.displayData = [...this.challengeData];
      this.loaderConfig = { ...this.loaderConfig, ...{ show: false } };
    });
  }
  getTags() {
    this.challengeService.getTagsList().subscribe((data) => {
      this.tagsFilter.data = data;
    });
  }
  setGreetingsConfig() {
    const user = this.authService.currentUserData;
    this.greetingsConfig = {
      header: ['Hello', user.name],
      subHeader: 'Welcome to Hack News',
      direction: 'Look at the open challenges for this month',
    };
  }
  getSortFilter(data) {
    const title = this.sortFilter.title;
    const sortByKey = data[0].key;
    console.log(sortByKey);
    // if (this.setSelectedsortByKey !== sortByKey) {
    //   this.setSelectedsortByKey = sortByKey;

    //   this.displayData = this.utilService.sortArrayBasedOnProps(
    //     this.displayData,
    //     this.setSelectedsortByKey,
    //     'DESC'
    //   );
    // }
    this.filterList.sortBy = sortByKey;
    this.getChallengeList(this.filterList);
  }
  getDifficultyFilter(data) {
    const keys = data.map((ele) => ele.key);
    // this.displayData = this.challengeData.filter((fData) => {
    //   const tempArr = fData.tags.filter((value) => keys.includes(value));
    //   return tempArr.length;
    // });
    this.filterList.difficulty = keys;
    this.getChallengeList(this.filterList);
  }

  getTagsFilter(data) {
    const keys = data.map((ele) => ele.value);
    // console.log(this.displayData);
    // this.displayData = this.challengeData.filter((fData) => {
    //   const tempArr = fData.tags.filter((value) => keys.includes(value));
    //   return tempArr.length;
    // });
    // console.log(data);
    this.filterList.tags = keys;
    this.getChallengeList(this.filterList);
  }

  challengeItemClicked(item) {
    this.router.navigate(['/challenge/details/' + item.challengeId]);
  }
}
