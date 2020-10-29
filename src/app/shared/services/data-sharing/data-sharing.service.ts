import { Injectable } from '@angular/core';
import { GreetingsModel } from '../../models/config.model';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataSharingService {
  // private greetingConfigSubject: BehaviorSubject<GreetingsModel>;
  constructor() {
    // this.greetingConfigSubject = new BehaviorSubject<GreetingsModel>({});
  }
  // get greetingConfig(): GreetingsModel {
  //   return this.greetingConfigSubject.value;
  // }
  // set greetingConfig(config: GreetingsModel) {
  //   this.greetingConfigSubject.next(config);
  // }
}
