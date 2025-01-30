import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: false,
  
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  id!: string;

  constructor(
    private route: ActivatedRoute
  ){
    this.id = route.snapshot.paramMap.get("id")!;
  }

  //Házi feladat:
  /*
  User serviceben metódust írni 1 db user lekérdezésére:
  https://jsonplaceholder.typicode.com/users/{id} API-ról

  HTML-en megjeleníteni a user nevét, és email címét
  
  */


}
