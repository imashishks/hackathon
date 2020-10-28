import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse,
} from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private REST_API_URL = 'http://localhost:3000';
  private NO_OF_GET_RETRIES = 2;
  private NO_OF_POST_RETRIES = 1;
  constructor(private httpClient: HttpClient) {}
  private getURL(path: string): string {
    return this.REST_API_URL + path;
  }
  // Get Request
  Get<Response>(path: string, params?: HttpParams) {
    return this.httpClient
      .get<Response>(this.getURL(path), {
        params,
      })
      .pipe(retry(this.NO_OF_GET_RETRIES), catchError(this.errorHander));
  }
  // Post Request
  Post<Response, Payload>(path: string, data: Payload): Observable<Response> {
    return this.httpClient
      .post<Response>(this.REST_API_URL + path, data)
      .pipe(retry(this.NO_OF_POST_RETRIES), catchError(this.errorHander));
  }
  errorHander(error: HttpErrorResponse) {
    console.log(error);

    const errorMessage = {
      message: 'Something Went Wrong',
    };

    if (error && error.message) {
      errorMessage.message = error.message;
    }
    return throwError(errorMessage);
  }
}
