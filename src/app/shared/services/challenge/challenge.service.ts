import { Injectable } from '@angular/core';

import { HttpService } from '../http/http.service';
import { ChallegeItem } from '../../models/challenge.model';
import { HttpParams } from '@angular/common/http';
import { filter } from 'rxjs/operators';
@Injectable()
export class ChallengeService {
  constructor(private httpService: HttpService) {}
  private challengeItem: ChallegeItem;

  getChallengesList(filterList) {
    let params = new HttpParams();
    params = params.append('page', filterList.page);
    params = params.append('limit', filterList.limit);
    params = params.append('sortBy', filterList.sortBy);
    params = params.append('difficulty', filterList.difficulty);
    params = params.append('tags', JSON.stringify(filterList.tags));
    return this.httpService.Get<Array<ChallegeItem>>('challenges', params);
  }
  getTagsList() {
    return this.httpService.Get<Array<{ value: string }>>('tags');
  }
}
