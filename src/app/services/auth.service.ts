import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import {User} from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private BASE_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getToken(): string {
    return localStorage.getItem('token');
  }

  logIn(payload:any): Observable<any> {
     const url = encodeURI('username?email=' + payload.email + '&password=' + payload.password); 
     return this.http.get<User>(this.BASE_URL + url);
  } 

   signUp(email: string, password: string): Observable<User> {
    const url = `${this.BASE_URL}username`;
    return this.http.post<User>(url, {email, password});
  }
}
