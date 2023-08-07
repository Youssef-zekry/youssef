import { product } from "./models/product";

export class productService{
	getProduct(): product{
		const t = localStorage.getItem('product');
		return t ? JSON.parse(t) : null;
	}
}