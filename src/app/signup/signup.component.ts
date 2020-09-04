import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators  } from '@angular/forms';
import { User } from '../models/user';
import { Store } from '@ngrx/store';
import { AppState, selectAuthState } from '../store/app.states';
import { SignUp } from '../store/actions/auth.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;  //declaring our form variable
  //user: User = new User();
  getState: Observable<any>;
  errorMessage: string | null;
  constructor(private fb: FormBuilder,private store: Store<AppState>) { 
    this.getState = this.store.select(selectAuthState);}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      phone: [null, [ Validators.maxLength(10)]],
     
    });
   
    this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    });

  }

  submitForm(): void{
console.log("form submitted");
console.log(this.signupForm.value);
const payload = {
  email: this.signupForm.get('email').value,
  password:  this.signupForm.get('password').value
};
this.store.dispatch(new SignUp(payload));

  }

}