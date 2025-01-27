import { Component } from '@angular/core';

@Component({
  selector: 'app-tablazat',
  standalone: false,
  
  templateUrl: './tablazat.component.html',
  styleUrl: './tablazat.component.css'
})
export class TablazatComponent {
  products: MyProduct[] = []

  constructor(){
    this.products.push({
      id: 2141,
      name: "Hajszárító",
      description: "ez itt a leírás",
      price: 23165,
      isAvailable: true,
      category: "electronics"
    })
    this.products.push({
      id: 618,
      name: "Kenyérpirító",
      description: "ez itt a kenyérpirító leírása",
      price: 35165,
      isAvailable: false,
      category: "electronics"
    })
    this.products.push({
      id: 156,
      name: "Ribizli",
      description: "ez itt a Ribizli leírás",
      price: 265,
      isAvailable: true,
      category: "fruits"
    })
    this.products.push({
      id: 156,
      name: "Kizsgugya",
      description: "ez itt a Kizsgugya leírás",
      price: 265,
      isAvailable: true,
      category: "others"
    })
  }
  myFunc(p: MyProduct){
    alert(p.name)
  }
}

export interface MyProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
  category: string;
}
