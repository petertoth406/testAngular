import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: false,
  
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  selectedIndex: number = 0;

  users: User[] = [{
    id: 123,
    name: "Teszt",
    username: "testuser",
    email: "testuser@asd.hu",
    address: {
      street: "Kossuth Lajos utca 12",
      suite: "2",
      city: "Budapest",
      zipcode: "1234"
    }, 
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains"
    },
    phone: "+36701234567",
    website: "www.asd.com"
  }];
  

  constructor(private userService: UserService,
      private router: Router
    ){
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
    }, 2000)

    


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

  selectRow(index: number){
    this.selectedIndex = index;
  }
  navToUser(id: number){
    this.router.navigate(["user/" + id])
  }
}
