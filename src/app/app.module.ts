import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AuthEffects } from './store/effects/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/app.states';
import { StoreModule } from '@ngrx/store';
import { ProductModule } from '../app/products/product.module';
import { ProductEffects } from './products/store/effects/product.effects';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ProductModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([AuthEffects, ProductEffects]),
  ],

  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
