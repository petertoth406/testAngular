import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyService } from '../my.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router, private myService: MyService){
    
  }


  navigateTo(path: string){
    this.router.navigate([path])
  }

  logout(){
    this.router.navigate(["login"])
    this.myService.logout();
  }
}
