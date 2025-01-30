import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MyService } from '../../services/my.service';
@Component({
  selector: 'app-tablazat',
  standalone: false,
  
  templateUrl: './tablazat.component.html',
  styleUrl: './tablazat.component.css'
})
export class TablazatComponent implements OnInit{

  products: MyProduct[] = []
  users: any[] = []

  constructor(private myService: MyService){
    this.products.push(
      {
        id: 12421, 
        name: "Alma",
        price: 165,
        description: "ez egy Alma",
        isAvailable: true,
        category: "gyumolcs"
      }
    )
    this.products.push(
      {
        id: 151, 
        name: "Kenyér pirító",
        price: 16516,
        description: "ez egy Kenyér pirító",
        isAvailable: true,
        category: "electronics"
      }
    )
    this.products.push(
      {
        id: 561, 
        name: "Hajszárító",
        price: 41661,
        description: "ez egy hajszárító",
        isAvailable: false,
        category: "electronics"
      }
    )
    this.products.push(
      {
        id: 1656, 
        name: "Kiskutya",
        price: 135165,
        description: "ez egy kiskutya",
        isAvailable: true,
        category: "egyeb"
      }
    )
  }

  myFunc(p: MyProduct){
    alert(p.description)
    fetch("https://jsonplaceholder.typicode.com/users/1").then().catch()
  }

  myPromise(){
    return new Promise((resolve, reject)=>{
      let sikeres = false;
      console.log("Meg lett hívva")
      if(sikeres)
        resolve("Választ")
      else
        reject("Hiba")
    })
  }

  myObservable(){
    return new Observable(observer =>{
      console.log("Ez is meg lett hívva")

      observer.next("Ez itt az első érték")
      observer.next("Ez meg itt a második")
      //observer.error("Ez meg itt egy hiba")
      observer.complete()
    })
  }


  ngOnInit(): void {
    this.myPromise().then(res=>{
      alert(res)
    }).catch(err=>{
      console.error(err);
    })

    this.myObservable().subscribe(res=>{
      console.log(res);
    }, err=>{
      alert("Hiba történt: " + err)
    }, ()=>{
      console.log("Ez itt mindenképp megtörténik")
    })



    this.myService.myFirstGet().subscribe(res=>{
      console.log(res)
      this.users = res;
    },err=>{

    },()=>{
      
    });
  }

}

export interface MyProduct{
  id: number,
  name: string,
  description: string,
  price: number,
  isAvailable: boolean,
  category: string
}

