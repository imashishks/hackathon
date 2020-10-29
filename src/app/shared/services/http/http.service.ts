import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse,
} from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}
  private getURL(path: string): string {
    return environment.restApiUrl + path;
  }

  // Get Request
  Get<Response>(path: string, params?: HttpParams) {
    return this.httpClient.get<Response>(this.getURL(path), {
      params,
    });
  }
  // Post Request
  Post<Response, Payload>(path: string, data: Payload): Observable<Response> {
    return this.httpClient.post<Response>(environment.restApiUrl + path, data);
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
