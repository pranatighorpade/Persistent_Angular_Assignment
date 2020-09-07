import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, selectProductState } from 'src/app/store/app.states';
import { UpdateProduct, ListProducts } from '../store/actions/product.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {
  id: number;
  product: Product;
  editform: FormGroup;
  getState: Observable<any>;
  errorMessage: string | null;

  constructor(
    public productService: ProductService,
    private route: ActivatedRoute,
    private store: Store<AppState>,
    public fb: FormBuilder,
    private router: Router
  ) {
    this.getState = this.store.select(selectProductState);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.productId;

    this.editform = this.fb.group({
      id: [null],
      productName: [null, Validators.required],
      description: [null],
      price: [null, Validators.required],
      category: [null],
      imgUrl: ['https://i.postimg.cc/Bb4Qf9Lw/electronic.png'],
    });

    this.productService.getById(this.id).subscribe((data) => {
      console.log(data);
      this.editform.setValue(data);
    });
  }

  submit(): void {
    const payload = {
      index: this.id,
      newProduct: this.editform.value,
    };
    this.store.dispatch(new UpdateProduct(payload));
    this.store.dispatch(new ListProducts());
    this.router.navigateByUrl('/product');
  }
}
