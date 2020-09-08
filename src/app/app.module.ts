import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AuthEffects } from './store/effects/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/app.states';
import { StoreModule } from '@ngrx/store';
import { ProductModule } from '../app/products/product.module';
import { ProductEffects } from './products/store/effects/product.effects';
import { HeaderComponent } from './header/header.component';
import { ThemeService } from './theme/theme.service';

@NgModule({
  declarations: [AppComponent, LoginSignupComponent, HeaderComponent],
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

  providers: [AuthService, ThemeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
