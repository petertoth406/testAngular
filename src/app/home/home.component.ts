import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  users: User[] = [{
    id: 123,
    name: "Teszt",
    username: "testuser",
    email: "testuser@asd.hu",
    address: {}, 
    phone: "+36701234567",
    website: "www.asd.com",
    company: {} 
  }];
  

  constructor(private userService: UserService){
    //alert("Construktor")
  }

  myPromise(){
    //fetch("url").then().catch()
    return new Promise((resolve, reject)=>{
      let sikeres = false;

      console.log("A promise meg lett hívva")

      if(sikeres){
        resolve("Válasz")
      }else{
        reject("Ez itt egy hiba")
      }
    })
  }

  myObservable(){
    return new Observable(obsever=>{

      console.log("Az Observable meg lett hívva");

      obsever.next("Ez itt egy adat");
      obsever.next(1421);
      obsever.next(false);

      //obsever.error("Ez itt egy hiba az Observable-ben")

      obsever.complete();
    })
  }

  ngOnInit(): void {

    setTimeout(()=>{
      this.userService.getUsers().subscribe(res=>{
        console.log(res[0].name)
        this.users = res;
      })
    }, 5000)

    


    this.myPromise().then(res=>{
      console.log("Ez itt a promise válasza: " + res)
    }).catch(err=>{
      console.error(err);
    })

    //fetch("https://jsonplaceholder.typicode.com/users/1")

    this.myObservable().subscribe(
      res=>{
        console.log(res)
      },
      err=>{
        console.error(err);
      },
      ()=>{
        console.log("A kérés befejeződött")
      }
    )
  }

}

