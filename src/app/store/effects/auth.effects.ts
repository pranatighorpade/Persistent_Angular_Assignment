import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import {
  AuthActionTypes,
  LogIn,
  LogInSuccess,
  LogInFailure,
  SignUp,
  SignUpSuccess,
  SignUpFailure,
  LogOut,
} from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  LogIn: Observable<any> = createEffect(() =>
    this.actions
      .pipe(ofType(AuthActionTypes.LOGIN))
      .pipe(map((action: LogIn) => action.payload))
      .pipe(
        switchMap((payload) => {
          return this.authService
            .logIn(payload)
            .pipe(
              map((user) => {
                if (user.length > 0) {
                  return new LogInSuccess({ email: payload.email });
                } else {
                  return new LogInFailure({ error: 'Sign in first' });
                }
              })
            )
            .pipe(
              catchError((error) => {
                console.log(error);
                return of(new LogInFailure({ error }));
              })
            );
        })
      )
  );

  LogInSuccess: Observable<any> = createEffect(
    () =>
      this.actions.pipe(
        ofType(AuthActionTypes.LOGIN_SUCCESS),
        tap((user) => {
         // localStorage.setItem('user', JSON.stringify(user));
          this.router.navigateByUrl('/product');
        })
      ),
    { dispatch: false }
  );

  SignUp: Observable<any> = createEffect(() =>
    this.actions
      .pipe(ofType(AuthActionTypes.SIGNUP))
      .pipe(map((action: SignUp) => action.payload))
      .pipe(
        switchMap((payload) => {
          return this.authService
            .signUp(payload.email, payload.password)
            .pipe(
              map((user) => {
                return new SignUpSuccess({
                  email: payload.email,
                  password: payload.password,
                });
              })
            )
            .pipe(
              catchError((error) => {
                console.log(error);
                return of(new SignUpFailure({ error }));
              })
            );
        })
      )
  );

  SignUpSuccess: Observable<any> = createEffect(
    () =>
      this.actions.pipe(
        ofType(AuthActionTypes.SIGNUP_SUCCESS),
        tap((user) => {
          localStorage.setItem('token', user);
          this.router.navigateByUrl('/login');
        })
      ),
    { dispatch: false }
  );

  SignUpFailure: Observable<any> = createEffect(
    () => this.actions.pipe(ofType(AuthActionTypes.SIGNUP_FAILURE)),
    { dispatch: false }
  );

  public LogOut: Observable<any> = createEffect(
    () =>
      this.actions.pipe(
        ofType(AuthActionTypes.LOGOUT),
        tap((user) => {
          localStorage.removeItem('token');
        })
      ),
    { dispatch: false }
  );
}
