import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products: Product[] = []

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
  myFunc(p: Product){
    alert(p.name)
  }
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
  category: string;
}