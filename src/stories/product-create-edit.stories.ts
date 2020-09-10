import { Meta, Story } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
import { ProductCreateEditComponent } from '../app/products/product-create-edit/product-create-edit.component';
import { ProductService } from '../app/products/services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

export default {
  title: 'Create and update Product List',
  component: ProductCreateEditComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
const Template: Story<ProductCreateEditComponent> = (
  args: ProductCreateEditComponent
) => ({
  component: ProductCreateEditComponent,
  //templateUrl: '../app/products/product-create-edit/product-create-edit.component.html',
  template: `<app-product-create-edit></app-product-create-edit>`,
  styleUrls: [
    '../app/products/product-create-edit/product-create-edit.component.scss',
  ],
  moduleMetadata: {
    imports: [
      RouterTestingModule.withRoutes([]),
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      RouterModule,
    ],
    declarations: [ProductCreateEditComponent],
    providers: [provideMockStore(), ProductService],
  },
  props: args,
});
export const ProductAdd = Template.bind({});
