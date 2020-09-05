import { Product } from '../models/product';

export default class ProductState {
  Proucts: Array<Product>;
  ProductError: Error;
}

export const initializeState = (): ProductState => {
  return { Proucts: Array<Product>(), ProductError: null };
};
