import * as auth from './reducers/auth.reducers';
import { createFeatureSelector } from '@ngrx/store';
import * as product from '../products/store/reducers/product.reducer';

export interface AppState {
  authState: auth.State;
  product: product.State;
}

export const reducers = {
  auth: auth.reducer,
  product: product.productReducer,
};

export const selectAuthState = createFeatureSelector<AppState>('auth');
export const selectProductState = createFeatureSelector<AppState>('product');
