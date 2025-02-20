import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-new-product',
  standalone: false,
  
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent implements OnInit {

  productForm: FormGroup;

  constructor(public fb: FormBuilder, public productService: ProductService){
    this.productForm = this.fb.group({
      id: [null],
      name: ["ougbore"],
      price: [15665],
      stock: [null]
    })
  }

  ngOnInit(): void {
    

    this.productForm.valueChanges.subscribe(form=>{
      console.log(form);
      console.log(this.productForm.value)
      console.log(this.productForm);
    })
  }

  save(){
    this.productService.addProduct(this.productForm.value)
  }
}
