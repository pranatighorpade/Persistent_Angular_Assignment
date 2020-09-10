import { Meta, Story } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
import { ProductListComponent } from '../app/products/product-list/product-list.component';
import { ProductService } from '../app/products/services/product.service';
import { HttpClientModule } from '@angular/common/http';

export default {
  title: 'Product List',
  component: ProductListComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
const Template: Story<ProductListComponent> = (args: ProductListComponent) => ({
  component: ProductListComponent,
  templateUrl: '../app/products/product-list/product-list.component.html',
  styleUrls: ['../app/products/product-list/product-list.component.scss'],
  moduleMetadata: {
    imports: [
      RouterTestingModule.withRoutes([]),
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
    ],
    declarations: [ProductListComponent],
    providers: [provideMockStore(), ProductService],
  },
  props: args,
});
export const ProductList = Template.bind({});
