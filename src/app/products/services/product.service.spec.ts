import { TestBed, inject, async } from '@angular/core/testing';
import { ProductService } from './product.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

const mockProducts = [
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

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService],
    });
    this.service = TestBed.inject(ProductService);
  });

  beforeEach(inject(
    [ProductService, HttpTestingController],
    (serviceName, httpMockName) => {
      service = serviceName;
      httpMock = httpMockName;
    }
  ));

  it('should be created', () => {
    const service1 = TestBed.inject(ProductService);
    expect(service1).toBeTruthy();
  });

  it('getAllProducts: should return a product list', () => {
    this.service.getAllProducts().subscribe((products) => {
      expect(products.length).toBe(3);
    });

    const req = httpMock.expectOne('http://localhost:3000/products/');

    req.flush(mockProducts);
    httpMock.verify();
  });

  it('getById: should return a product by given id', () => {
    this.service.getById(2).subscribe((products) => {
      expect(products.price).toBe(2500);
    });

    const req = httpMock.expectOne('http://localhost:3000/products/2');

    req.flush(mockProducts);
    httpMock.verify();
  });

  it('update: should update a product and return the new product list', () => {
    const newProduct = {
      id: 2,
      productName: 'LED TV',
      description:
        'Mi TV 4X 125.7 cm (50 Inches) 4K Ultra HD Android LED TV (Black)',
      price: 2500,
      imgUrl: 'https://i.postimg.cc/FRGgQGdN/81t2-A6uhm4-L-SL1500.jpg',
      category: 'Home Appliances',
    };
    this.service.updateProduct(newProduct).subscribe((product) => {
      expect(product).toBeDefined();
      expect(product.length).toBe(1);
      const req = httpMock.expectOne('http://localhost:3000/products/');
      req.flush(mockProducts);
      httpMock.verify();
    });
  });

  it('delete: should return an empty object', () => {
    this.service.deleteProduct().subscribe((product) => {
      expect(product).toBeDefined();
      const req = httpMock.expectOne('http://localhost:3000/products/');
      req.flush(mockProducts);
      httpMock.verify();
    });
  });

  it('create product: should create a product ', () => {
    const newProduct = {
      id: 2,
      productName: 'LED TV',
      description:
        'Mi TV 4X 125.7 cm (50 Inches) 4K Ultra HD Android LED TV (Black)',
      price: 2500,
      imgUrl: 'https://i.postimg.cc/FRGgQGdN/81t2-A6uhm4-L-SL1500.jpg',
      category: 'Home Appliances',
    };
    this.service.createProduct(newProduct).subscribe((product) => {
      expect(product).toBeDefined();
      expect(product.length).toBe(1);
    });
    const req = httpMock.expectOne('http://localhost:3000/products/');
    req.flush(mockProducts);
    httpMock.verify();
  });


});

