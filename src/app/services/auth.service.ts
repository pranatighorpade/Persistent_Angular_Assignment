import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable, throwError } from 'rxjs';
import { User } from '../models/user';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly BASE_URL = environment.baseURL;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  logIn(payload: any): Observable<any> {
    const url = encodeURI(
      'username?email=' + payload.email + '&password=' + payload.password
    );
    return this.http
      .get<User>(this.BASE_URL + url, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  signUp(email: string, password: string): Observable<any> {
    const url = `${this.BASE_URL}username`;
    return this.http
      .post<User>(url, { email, password }, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
