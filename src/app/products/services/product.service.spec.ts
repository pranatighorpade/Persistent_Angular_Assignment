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
    productName: 'JBL Headphones ',
    description:
      'The new JBL C100SI is a dynamic, ultra-lightweight in-ear headphone',
    price: '599cdfg',
    quantity: 44,
    id: 1,
  },
  {
    productName: 'Samsung Galaxy Mobile Cover',
    description:
      'Mobile Skin are made of high quality Premium Vinyl adhesive skin. ',
    price: 399,
    quantity: 3,
    id: 2,
  },
  {
    productName: 'abc',
    description: 'adfsgdg',
    price: '2345',
    quantity: '45',
    id: 3,
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
    (serviceObj, httpMockObj) => {
      service = serviceObj;
      httpMock = httpMockObj;
    }
  ));

  it('getAllProducts: should return a  list', (done) => {
    service.getAllProducts().subscribe((airports) => {
      expect(airports.length).toBe(3);
      done();
    });

    const req = httpMock.expectOne('http://localhost:3000/products');

    req.flush(mockProducts);
    httpMock.verify();
  });

  it('getById: should the selected airport', (done) => {
    service.getById(1).subscribe((airport) => {
      expect(airport.id).toBe('JBL Headphones');
    });

    const req = httpMock.expectOne('http://localhost:3000/products');

    req.flush(mockProducts);
    httpMock.verify();
  });
});
