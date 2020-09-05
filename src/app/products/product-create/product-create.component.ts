import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {ProductService} from '../services/product.service';
import { Product } from '../models/product';
import { AddProduct, ListProducts } from '../store/actions/product.action';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, selectProductState } from 'src/app/store/app.states';
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})

export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;
  product: Product;
  
  getState: Observable<any>;
  errorMessage: string | null;

  constructor(public productService: ProductService, 
    private store: Store<AppState>,
    public fb: FormBuilder,
    private router: Router) { 
    this.getState = this.store.select(selectProductState);
  }

  ngOnInit() {
      this.productForm = this.fb.group({
      productName: [''],
      description: [''],
      price: [''],
      quantity: [''],    
    })
  }


  submitForm() {
      this.store.dispatch(new AddProduct(this.productForm.value));
      this.store.dispatch(new ListProducts());
      this.store.subscribe(data => {
      this.router.navigateByUrl('/product');
    });
     
}}