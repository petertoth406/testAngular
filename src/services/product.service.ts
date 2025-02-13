import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: any[] = [
    {id: 1, name: "Product 1", price: 123, stock: 5},
    {id: 2, name: "Product 2", price: 615, stock: 15},
    {id: 3, name: "Product 3", price: 35153, stock: 50},
    {id: 4, name: "Product 4", price: 564156, stock: 20},
    {id: 'g', name: 'ougbore', price: 15665, stock: null}
  ];

  constructor() { }

  addProduct(product: any){
    this.products.push(product);
  }

  getProducts(){
    return this.products;
  }
}
