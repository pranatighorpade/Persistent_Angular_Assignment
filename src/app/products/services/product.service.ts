import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product } from '../models/product';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  readonly jsonApiServer = "http://localhost:3000";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  createProduct(product): Observable<Product> {
    return this.httpClient.post<Product>(this.jsonApiServer + '/products/', JSON.stringify(product), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  

  getById(id): Observable<Product> {
    return this.httpClient.get<Product>(this.jsonApiServer + '/products/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.jsonApiServer + '/products/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  updateProduct(id, product): Observable<Product> {
    return this.httpClient.put<Product>(this.jsonApiServer + '/products/' + id, JSON.stringify(product), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  deleteProduct(id){
    return this.httpClient.delete<Product>(this.jsonApiServer + '/products/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
     } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }
}

