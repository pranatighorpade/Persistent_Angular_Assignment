import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from 'src/app/products/services/product.service';
import {
  AppState,
  selectProductState,
  selectAuthState,
} from '../../store/app.states';
import { Store } from '@ngrx/store';
import {
  ListProducts,
  DeleteProduct,
} from '../../products/store/actions/product.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  isAuthenticated = false;
  getState: Observable<any>;
  errorMessage: string | null;
  constructor(
    public productService: ProductService,
    private store: Store<AppState>
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.products = state.product;
      this.errorMessage = state.errorMessage;
    });

    this.store.dispatch(new ListProducts());
    this.store.subscribe((data) => {
      this.products = data.product.products;
    });
  }

  deleteProduct(id): void {
    if (window.confirm('Do you really want to delete the product?')) {
      this.store.dispatch(new DeleteProduct(id));
      this.store.dispatch(new ListProducts());
    }
  }
}
