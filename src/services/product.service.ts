import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: any[] = [
    {id: 1, name: "Product 1", price: 123, stock: 1328 },
    {id: 2, name: "Product 2", price: 3574, stock: 12 },
    {id: 3, name: "Product 3", price: 387, stock: 312 },
    {id: 4, name: "Product 4", price: 3783, stock: 13 },
  ]

  constructor() { }

  getProducts(){
    return this.products;
  }

  addProduct(product: any){
    this.products.push(product)
  }
}
