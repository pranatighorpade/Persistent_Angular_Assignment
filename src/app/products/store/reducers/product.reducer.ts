import { Product } from '../../models/product';
import { LIST_PRODUCTS, LIST_DATA_SUCCESS, ProductsActions, 
  ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT ,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_SUCCESS, }  from '../actions/product.action';

export interface State {
  products: Product[];
  added: boolean | null;
  updated: boolean | null;
  deleted: boolean | null;
  loaded: boolean | null;
  message: string | null;
}

const initialState: State = {
    products: [],
    message: null,
    added: null,
    updated: null,
    loaded: null,
    deleted:  null
};


export function productReducer(state: State = initialState, action: ProductsActions): State {
  switch (action.type) {
      case ADD_PRODUCT: {
      console.log('Add product', action);
      return {
        ...state
      };
      }
      case LIST_PRODUCTS: {
          console.log('list products', action, state);
          return {
                  ...state
          };
    }
      case DELETE_PRODUCT: {
          console.log('delete product', action);
          return {
                  ...state
          };
      }
    case UPDATE_PRODUCT: {
      console.log('update product', action);
      return {
              ...state
      };
    }
    case LIST_DATA_SUCCESS: {
      console.log('in data_load', action, state);
      return {
        ...state,
        products: action.payload,
        message: null,
        loaded: true
      };
    }
    case ADD_PRODUCT_SUCCESS: {
      return {
       ...state,
        message: 'The product is added successfully!',
        added: true
      };
      }
      case DELETE_PRODUCT_SUCCESS: {
        return {
         ...state,
          /* message: 'The product is deleted successfully!',
          added: true */
        };
        }
        case UPDATE_PRODUCT_SUCCESS: {
          return {
           ...state,
            message: 'The product is updated successfully!',
            added: true
          };
          }
    default: {
      return state;
    }
  }
}
