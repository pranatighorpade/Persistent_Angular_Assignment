import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { catchError } from "rxjs/operators";
import { of } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import {
         AuthActionTypes,
    LogIn, LogInSuccess, LogInFailure,
    SignUp, SignUpSuccess, SignUpFailure,
    LogOut,
} from '../actions/auth.actions';


type NewType = any;

@Injectable()
export class AuthEffects {

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}

LogIn: Observable<any> = createEffect(()=>this.actions.pipe(
ofType(AuthActionTypes.LOGIN)).pipe(
    map((action: LogIn) => action.payload)).pipe(switchMap(payload => {
    return this.authService.logIn(payload).pipe(
        map((user) => {
       
        return new LogInSuccess({token: user.token, email: payload.email});
      })).pipe(catchError((error) => {
        console.log(error);
        return of(new LogInFailure({ error: error }));
      }));
  }))); 
 

  LogInSuccess: Observable<any> = createEffect(()=> this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    tap((user) => {
     // localStorage.setItem('token', user.payload.token);
     localStorage.setItem('token', user);
      this.router.navigateByUrl('/home');
    })
  ), {  dispatch: false });

  
  SignUp: Observable<any> = createEffect(()=>this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP)).pipe(
        map((action:SignUp) => action.payload)).pipe(switchMap(payload => {
        return this.authService.signUp(payload.email, payload.password).pipe(
            map((user) => {
           
            return new SignUpSuccess({token: user.token, email: payload.email});
          })).pipe(catchError((error) => {
            console.log(error);
            return of(new SignUpFailure({ error: error }));
          }));
      }))); 


 
  SignUpSuccess: Observable<any> = createEffect(()=>this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP_SUCCESS),
    tap((user) => {
      localStorage.setItem('token', user);
      this.router.navigateByUrl('/home');
    })
  ), {  dispatch: false });
 

  SignUpFailure: Observable<any> = createEffect(()=>this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP_FAILURE)
  ), {  dispatch: false });



public LogOut: Observable<any> = createEffect(()=>this.actions.pipe(
  ofType(AuthActionTypes.LOGOUT),
  tap((user) => {
    localStorage.removeItem('token');
  })
), {  dispatch: false });
 
}