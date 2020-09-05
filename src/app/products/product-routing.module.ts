import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from '../products/product-list/product-list.component';
import { ProductCreateComponent } from '../products/product-create/product-create.component';
import { ProductEditComponent } from '../products/product-edit/product-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/product',
    pathMatch: 'full',
  },
  {
    path: 'product',
    component: ProductListComponent,
  },
  { path: 'product/create', component: ProductCreateComponent },
  { path: 'product/:productId/edit', component: ProductEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
