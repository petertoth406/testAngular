import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  standalone: false,
  
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  users: User[] = [
    {
      id: 132,
      name: "Teszt",
      email: "teszt@asd.hu",
      username: "teszt",
      address: {},
      phone: "+36701234567",
      website: "www.asd.hu"
    }
  ]

  constructor(
    private userService: UserService
  ){

  }

  ngOnInit(): void {

    setTimeout(()=>{
      this.userService.getUsers().subscribe(res=>{
        this.users = res;
      })
    }, 2000)

    
  }

  toggleAddress(user: User){
    user.showAddress = !user.showAddress;
  }

}
