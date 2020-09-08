import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductCreateEditComponent } from './products/product-create-edit/product-create-edit.component';


const routes: Routes = [
  { path: '',  redirectTo: '/product',    pathMatch: 'full' },
  { path: 'product', component: ProductListComponent},
  { path: 'login',   component: LoginSignupComponent , data: { isLogin: true } },
  { path: 'signup',  component: LoginSignupComponent },
  { path: 'product/create', component: ProductCreateEditComponent },
  { path: 'product/:productId/edit', component: ProductCreateEditComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
