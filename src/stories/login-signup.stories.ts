import { LoginSignupComponent } from '../app/login-signup/login-signup.component';
import { Meta, Story } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
export default {
  title: 'Login component',
  component: LoginSignupComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
const Template: Story<LoginSignupComponent> = (args: LoginSignupComponent) => ({
  component: LoginSignupComponent,
  template: `<app-login-signup></app-login-signup>`,
  styles: ['../app/login-signup/login-signup.component.scss'],
  moduleMetadata: {
    imports: [
      RouterTestingModule.withRoutes([]),
      FormsModule,
      ReactiveFormsModule,
    ],
    declarations: [LoginSignupComponent],
    providers: [provideMockStore()],
  },
  props: args,
});
export const SignUp = Template.bind({});
