import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from '../products/product-routing.module';
import { ProductCreateComponent } from '../products/product-create/product-create.component';
import { ProductListComponent } from '../products/product-list/product-list.component';
import { ProductEditComponent } from '../products/product-edit/product-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ProductModule {}
