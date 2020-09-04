import { createAction, props } from "@ngrx/store";

import { Product } from "../../models/products";

export enum ProductActionTypes {
  LoadProducts = "[Product] Load Products",
  LoadProductsSuccess = "[Product] Load Products Success",
  LoadProductsFail = "[Product] Load Products Fail"
}

export const loadProducts = createAction(ProductActionTypes.LoadProducts);

export const loadProductsSuccess = createAction(
    ProductActionTypes.LoadProductsSuccess,
  props<{ data: Product[] }>()
);

export const loadProductsFail = createAction(
    ProductActionTypes.LoadProductsFail,
  props<{ error: Error | any }>()
);

export const fromEntityActions = {
    loadProducts,
    loadProductsFail,
  loadProductsSuccess
};