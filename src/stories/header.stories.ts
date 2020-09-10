import { storiesOf, moduleMetadata } from '@storybook/angular';
import { HeaderComponent } from '../app/header/header.component';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginSignupComponent } from '../app/login-signup/login-signup.component';
storiesOf('Header', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        RouterTestingModule.withRoutes([]),
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [HeaderComponent, LoginSignupComponent],
      providers: [provideMockStore()],
    })
  )
  .add('default', () => {
    return {
      templateUrl: '../app/header/header.component.html',
      styleUrls: ['../app/header/header.component.scss'],
      props: {},
    };
  });

