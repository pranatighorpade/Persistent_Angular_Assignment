import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from '../products/product-list/product-list.component';
import { ProductCreateEditComponent } from '../products/product-create-edit/product-create-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: 'product', component: ProductListComponent },
  { path: 'product/create', component: ProductCreateEditComponent },
  { path: 'product/:productId/edit', component: ProductCreateEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
