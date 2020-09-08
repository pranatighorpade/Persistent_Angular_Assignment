import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { User } from '../models/user';
import { Store } from '@ngrx/store';
import { AppState, selectAuthState } from '../store/app.states';
import { LogIn, SignUp } from '../store/actions/auth.actions';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss'],
})
export class LoginSignupComponent implements OnInit {
  loginForm: FormGroup;
  user: User = new User();
  getState: Observable<any>;
  errorMessage: string | null;
  viewLogin: boolean;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });

    this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    });
    this.errorMessage = null;

    this.route.data.subscribe((params) => {
      if (params && params.isLogin) {
        this.viewLogin = params.isLogin;
      } else {
        this.viewLogin = false;
      }
    });
  }

  submitForm(): void {
    const payload = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value,
    };

    if (this.viewLogin) {
      this.store.dispatch(new LogIn(payload));
    } else {
      this.store.dispatch(new SignUp(payload));
    }
  }
}
