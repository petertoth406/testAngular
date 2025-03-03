import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: false,
  
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  
  products: any[] = []

  constructor(private router: Router, public productService: ProductService){}

  navTo(path: string){
    this.router.navigate([path])
  }

  ngOnInit(): void {
    this.productService.getProducts()
  }

  edit(id: number){
    this.router.navigate(['products/update', id])
  }
}
