import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { RouterTestingHarness } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  standalone: false,
  
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent implements OnInit {

  product: any;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
    ){
      route.data.subscribe(data=>{
        this.product = data['asd'];
        console.log(this.product)
      })
  }
  
  ngOnInit(): void {
    /*this.product = this.productService.getProductById(1);
    console.log(this.product)*/
  }
}
