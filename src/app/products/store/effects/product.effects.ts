import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, mergeMap } from 'rxjs/operators';

import {
  ListDataSucess,
  LIST_PRODUCTS,
  ListProducts,
  AddProduct,
  AddProductSuccess,
  DeleteProduct,
  DeleteProductSuccess,
  UpdateProduct,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  ADD_PRODUCT,
  UpdateProductSuccess,
} from '../actions/product.action';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
@Injectable()
export class ProductEffects {
  constructor(
    private actions: Actions,
    private productService: ProductService,
    private router: Router
  ) {}

  @Effect({ dispatch: true })
  ListProducts: Observable<any> = this.actions.pipe(
    ofType(LIST_PRODUCTS),
    map((action: ListProducts) => action),
    mergeMap((payload) => {
      return this.productService
        .getAllProducts()
        .pipe(map((data) => new ListDataSucess(data)));
    })
  );

  @Effect({ dispatch: true })
  AddProduct: Observable<any> = this.actions.pipe(
    ofType(ADD_PRODUCT),
    map((action: AddProduct) => action.payload),
    mergeMap((payload) => {
      return this.productService.createProduct(payload).pipe(
        map((data) => {
          if (data) {
            window.alert('Product added Successfully!');
            return new AddProductSuccess(data);
          }
        })
      );
    })
  );

  @Effect({ dispatch: true })
  DeleteProduct: Observable<any> = this.actions.pipe(
    ofType(DELETE_PRODUCT),
    map((action: DeleteProduct) => action.payload),
    mergeMap((payload) => {
      return this.productService.deleteProduct(payload).pipe(
        map((data) => {
          if (data) {
            window.alert('Product deleted Successfully!');
            return new DeleteProductSuccess();
          }
        })
      );
    })
  );

  @Effect({ dispatch: true })
  UpdateProduct: Observable<any> = this.actions.pipe(
    ofType(UPDATE_PRODUCT),
    map((action: UpdateProduct) => action.payload),
    mergeMap((payload) => {
      return this.productService
        .updateProduct(payload.index, payload.newProduct)
        .pipe(
          map((data) => {
            if (data) {
              window.alert('Product updated Successfully!');
              return new UpdateProductSuccess(data);
            }
          })
        );
    })
  );
}
