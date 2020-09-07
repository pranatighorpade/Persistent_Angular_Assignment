import {
  ListProducts,
  LIST_PRODUCTS,
  ListDataSucess,
  LIST_DATA_SUCCESS,
  AddProduct,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  AddProductSuccess,
  UpdateProduct,
  UPDATE_PRODUCT,
  UpdateProductSuccess,
  UPDATE_PRODUCT_SUCCESS,
  DeleteProduct,
  DELETE_PRODUCT,
  DeleteProductSuccess,
  DELETE_PRODUCT_SUCCESS,
} from '../actions/product.action';
import { Product } from '../../models/product';

const newProduct: Product = {
  id: 1,
  productName: 'JBL Headphones ',
  description:
    'The new JBL C100SI is a dynamic, ultra-lightweight in-ear headphone',
  price: 599,
  imgUrl: 'https://i.postimg.cc/qB29NkJL/headphone.jpg',
  category: 'Mobile and Accessories',
};
const index = 1;

describe('ListProducts', () => {
  it('should create an action', () => {
    const action = new ListProducts();
    expect(action.type).toEqual(LIST_PRODUCTS);
  });
});

describe('ListDataSucess', () => {
  it('should create an action', () => {
    const payload: Product[] = [
      {
        id: 1,
        productName: 'JBL Headphones ',
        description:
          'The new JBL C100SI is a dynamic, ultra-lightweight in-ear headphone',
        price: 599,
        imgUrl: 'https://i.postimg.cc/qB29NkJL/headphone.jpg',
        category: 'Mobile and Accessories',
      },
      {
        id: 2,
        productName: 'LED TV',
        description:
          'Mi TV 4X 125.7 cm (50 Inches) 4K Ultra HD Android LED TV (Black)',
        price: 2500,
        imgUrl: 'https://i.postimg.cc/FRGgQGdN/81t2-A6uhm4-L-SL1500.jpg',
        category: 'Home Appliances',
      },
      {
        id: 3,
        productName: 'Speaker',
        description:
          'Sony SRS-XB12 Wireless Extra Bass Bluetooth Speaker, 16 Hours Battery Life',
        price: 4000,
        imgUrl: 'https://i.postimg.cc/NFhqWFgy/speaker.jpg',
        category: 'Audio Devices',
      },
    ];
    const action = new ListDataSucess(payload);

    expect({ ...action }).toEqual({
      type: LIST_DATA_SUCCESS,
      payload,
    });
  });
});

describe('AddProduct', () => {
  it('should create an action', () => {
    const payload: Product = {
      id: 1,
      productName: 'JBL Headphones ',
      description:
        'The new JBL C100SI is a dynamic, ultra-lightweight in-ear headphone',
      price: 599,
      imgUrl: 'https://i.postimg.cc/qB29NkJL/headphone.jpg',
      category: 'Mobile and Accessories',
    };

    const action = new AddProduct(payload);

    expect({ ...action }).toEqual({
      type: ADD_PRODUCT,
      payload,
    });
  });
});

describe('AddProductSuccess', () => {
  it('should create an action', () => {
    const payload: Product = {
      id: 1,
      productName: 'JBL Headphones ',
      description:
        'The new JBL C100SI is a dynamic, ultra-lightweight in-ear headphone',
      price: 599,
      imgUrl: 'https://i.postimg.cc/qB29NkJL/headphone.jpg',
      category: 'Mobile and Accessories',
    };

    const action = new AddProductSuccess(payload);

    expect({ ...action }).toEqual({
      type: ADD_PRODUCT_SUCCESS,
      payload,
    });
  });
});

describe('UpdateProduct', () => {
  it('should create an action', () => {
    const payload: { index: number; newProduct: Product } = {
      index,
      newProduct,
    };
    const action = new UpdateProduct(payload);
    expect({ ...action }).toEqual({
      type: UPDATE_PRODUCT,
      payload,
    });
  });
});

describe('UpdateProductSuccess', () => {
  it('should create an action', () => {
    const payload: Product = {
      id: 1,
      productName: 'JBL Headphones ',
      description:
        'The new JBL C100SI is a dynamic, ultra-lightweight in-ear headphone',
      price: 599,
      imgUrl: 'https://i.postimg.cc/qB29NkJL/headphone.jpg',
      category: 'Mobile and Accessories',
    };
    const action = new UpdateProductSuccess(payload);
    expect({ ...action }).toEqual({
      type: UPDATE_PRODUCT_SUCCESS,
      payload,
    });
  });
});

describe('DeleteProductSuccess', () => {
  it('should create an action', () => {
    const action = new DeleteProductSuccess();
    expect({ ...action }).toEqual({
      type: DELETE_PRODUCT_SUCCESS,
    });
  });
});
