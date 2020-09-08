import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import {
  AddProduct,
  ListProducts,
  UpdateProduct,
} from '../store/actions/product.action';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, selectProductState } from 'src/app/store/app.states';

@Component({
  selector: 'app-product-create-edit',
  templateUrl: './product-create-edit.component.html',
  styleUrls: ['./product-create-edit.component.scss'],
})
export class ProductCreateEditComponent implements OnInit {
  productForm: FormGroup;
  product: Product;
  id: number | null;
  getState: Observable<any>;
  errorMessage: string | null;
  isNewProduct: boolean;
  constructor(
    public productService: ProductService,
    private store: Store<AppState>,
    public fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.getState = this.store.select(selectProductState);
  }

  ngOnInit(): void {
    if (this.route.snapshot.params.productId) {
      this.isNewProduct = false;
      this.id = this.route.snapshot.params.productId;
      this.productService.getById(this.id).subscribe((data) => {
        this.productForm.setValue(data);
      });
    } else {
      this.isNewProduct = true;
    }

    this.productForm = this.fb.group({
      id: [null],
      productName: [null, Validators.required],
      description: [null],
      price: [null, Validators.required],
      category: [null],
      imgUrl: ['https://i.postimg.cc/Bb4Qf9Lw/electronic.png'],
    });
  }

  submitForm(): void {
    if (this.id) {
      const payload = {
        index: this.id,
        newProduct: this.productForm.value,
      };
      this.store.dispatch(new UpdateProduct(payload));
      this.store.dispatch(new ListProducts());
      this.router.navigateByUrl('/product');
      window.alert('Product Updated Successfully!');
    } else {
      this.store.dispatch(new AddProduct(this.productForm.value));
      this.store.dispatch(new ListProducts());
      this.router.navigateByUrl('/product');
      window.alert('Product Added Successfully!');
    }
  }
}
