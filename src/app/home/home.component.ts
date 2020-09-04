import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe((data: Product[])=>{
      console.log(data);
      this.products = data;
    })  

  }

}
