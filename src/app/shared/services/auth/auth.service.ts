import { Injectable } from '@angular/core';
import {
  LoginPayload,
  LoginResponse,
  SignUpPayload,
  SignUpResponse,
  UserData,
} from '../../models/onboarding.model';
import { HttpService } from '../http/http.service';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<UserData>;
  public currentUser: Observable<UserData>;

  constructor(private httpService: HttpService) {
    this.currentUserSubject = new BehaviorSubject<UserData>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }
  get currentUserData(): UserData {
    return this.currentUserSubject.value;
  }
  set currentUserData(userData) {
    this.currentUserSubject.next(userData);
  }
  login(payload: LoginPayload) {
    return this.httpService
      .Post<LoginResponse, LoginPayload>('login', payload)
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }
  signup(payload: SignUpPayload) {
    return this.httpService
      .Post<SignUpResponse, SignUpPayload>('signup', payload)
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user.data);
          return user;
        })
      );
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
