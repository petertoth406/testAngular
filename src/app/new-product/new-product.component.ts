import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { throwIfEmpty } from 'rxjs';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-new-product',
  standalone: false,
  
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent implements OnInit{
  /*id!: number;
  name!: number;
  price!: number;
  stock!: number;*/

  form!: FormGroup

  constructor(private fb: FormBuilder,
    private productService: ProductService){
    this.form = this.fb.group({
      id: [null, Validators.required],
      name: ["Kezdő érték", [Validators.required, Validators.minLength(3)]],
      price: [null, [Validators.required, Validators.min(0)]],
      stock: [null, Validators.required]
    })
  }

  ok(){
    console.log(this.form);

    console.log(this.form.value);

    if(this.form.valid){
      //Mentési logika
      this.productService.addProduct(this.form.value);
    }else{
      alert("A form még nincs megfelelően kitöltve")
    }

    

  }

  ngOnInit(): void {
    /*this.form.valueChanges.subscribe(values=>{
      console.log(values)
      
    })*/
    this.form.get("name")?.valueChanges.subscribe(v=>{
      console.log(v);
    })
  }
}
