import { Component, OnInit } from '@angular/core';
import { product } from '../models/product';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { productService } from '../productService';
import { userservice } from '../userService';
import { user } from '../models/user';
import { responseViewModel } from '../models/responseViewModel';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: product[] = [];
  cart: any[] = [];
  screenNumber: number = 1;
  user?: user;
  uid: any;
  uToken: any;
  message: string ="";

  constructor(
    private route: ActivatedRoute,
    private productService: productService,
    private http: HttpClient,
    private userService: userservice
  ) {}

  ngOnInit(): void {
    const url = 'http://localhost:8080/demo/products';
    this.http.get<product[]>(url).subscribe((response) => {
      console.log(response);
      this.products = response;
    });
    this.user = this.userService.getUser();
    this.uid = this.userService.getUser().userid;
    this.uToken = this.userService.getUser().token;
  }

  addToCart(product: product, itemCount: number) {
    let newItem = this.cart.find((item: any) => item.type === product);
    if (newItem) {
      newItem.count += itemCount;
    } else {
      newItem = {
        type: product,
        count: itemCount|| 1,
      };
      this.cart.push(newItem);
    }
    console.log(this.cart);
  }

  submitOrder() {
    const orderJsonList = this.cart.map((item: any) => {
      return {
        product_id: item.type.product_id,
        user_id: this.uid,
        item_count: item.count,
      };
    });

    const requestBody = {
      orderJsonList: orderJsonList,
      token: this.uToken,
    };
    console.log(JSON.stringify(requestBody));
    const url = 'http://localhost:8080/demo/order';

    this.http.post<responseViewModel>(url, requestBody).subscribe(
		(response) => {
        if (response.status_code === -1||response.status_code === -2||response.status_code === -3||response.status_code === -4) {
          console.log(response);
		  this.message = "Order failed";
        //   alert('order failed');

        } else if (response.status_code === 0) {
          console.log(response);
		  this.message = "Order placed successfully";
        //   alert('ordered successfully');
        } else {
          console.log(response);
        //   alert('something went wrong');
		this.message = "Something went wrong";
        }
      });
  }
}
