import { Component, OnInit} from '@angular/core';
import { product } from '../models/product';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { productService } from '../productService';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products:product[]=[];
  constructor(
    private route: ActivatedRoute,
    private productService: productService,
    private http: HttpClient
  ){}

  ngOnInit(): void {
    const url = 'http://localhost:8080/demo/products';
    this.http.get<product[]>(url)
    .subscribe(
      
      
      response=>{
        console.log(response);        
        this.products = response;
      }
    );

    // this.product = this.productService.getProduct();
}
}
