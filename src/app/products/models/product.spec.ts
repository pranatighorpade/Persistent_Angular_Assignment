import { Product } from './product';

describe('Product', () => {
  it('should create an instance of Product model', () => {
    expect(new Product()).toBeTruthy();
  });
});
