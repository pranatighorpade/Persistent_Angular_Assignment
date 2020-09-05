import { Action } from '@ngrx/store';
import { Product } from '../../models/product';

export const LIST_PRODUCTS = '[Products] Fetch product';
export const ADD_PRODUCT = '[Products] Add product';
export const UPDATE_PRODUCT = '[Products] Update product';
export const DELETE_PRODUCT = '[Products] Delete product';
export const LIST_DATA_SUCCESS = '[Products] List Success';
export const ADD_PRODUCT_SUCCESS = '[Products] Add product success';
export const DELETE_PRODUCT_SUCCESS = '[Products] Delete product success';
export const UPDATE_PRODUCT_SUCCESS = '[Products] Update product success';

export class ListProducts implements Action {
  readonly type = LIST_PRODUCTS;
}

export class ListDataSucess implements Action {
  readonly type = LIST_DATA_SUCCESS;
  constructor(public payload: Product[]) {}
}

export class AddProduct implements Action {
  readonly type = ADD_PRODUCT;
  constructor(public payload: Product) {}
}

export class AddProductSuccess implements Action {
  readonly type = ADD_PRODUCT_SUCCESS;
  constructor(public payload: Product) {}
}

export class UpdateProduct implements Action {
  readonly type = UPDATE_PRODUCT;
  constructor(public payload: { index: number; newProduct: Product }) {}
}

export class UpdateProductSuccess implements Action {
  readonly type = UPDATE_PRODUCT_SUCCESS;
  constructor(public payload: Product) {}
}

export class DeleteProduct implements Action {
  readonly type = DELETE_PRODUCT;
  constructor(public payload: number) {}
}

export class DeleteProductSuccess implements Action {
  readonly type = DELETE_PRODUCT_SUCCESS;
}

export type ProductsActions =
  | ListProducts
  | AddProduct
  | UpdateProduct
  | DeleteProduct
  | AddProductSuccess
  | DeleteProductSuccess
  | UpdateProductSuccess
  | ListDataSucess;
