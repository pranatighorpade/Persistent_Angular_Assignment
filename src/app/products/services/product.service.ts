import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product } from '../models/product';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly jsonApiServer = environment.baseURL;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  createProduct(product: Product): Observable<Product> {
    return this.httpClient
      .post<Product>(
        this.jsonApiServer + 'products/',
        JSON.stringify(product),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  getById(id: number): Observable<Product> {
    return this.httpClient
      .get<Product>(this.jsonApiServer + 'products/' + id)
      .pipe(catchError(this.errorHandler));
  }

  getAllProducts(): Observable<Product[]> {
    return this.httpClient
      .get<Product[]>(this.jsonApiServer + 'products/')
      .pipe(catchError(this.errorHandler));
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.httpClient
      .put<Product>(
        this.jsonApiServer + 'products/' + id,
        JSON.stringify(product),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  deleteProduct(id: number): Observable<Product> {
    return this.httpClient
      .delete<Product>(this.jsonApiServer + 'products/' + id, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
