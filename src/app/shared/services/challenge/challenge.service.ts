import { Injectable } from '@angular/core';

import { HttpService } from '../http/http.service';
import { ChallegeItem } from '../../models/challenge.model';
import { HttpParams } from '@angular/common/http';
@Injectable()
export class ChallengeService {
  constructor(private httpService: HttpService) {}
  private challengeItem: ChallegeItem;

  getChallengesList() {
    let params = new HttpParams();
    params = params.append('_page', '1');
    params = params.append('_limit', '10');
    this.httpService
      .Get<Array<ChallegeItem>>('challenges', params)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
