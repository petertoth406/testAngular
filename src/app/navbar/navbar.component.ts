import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MyService } from '../services/my.service';

@Component({
  selector: 'navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

    constructor(private router: Router, private myService: MyService){ }

    navigateTo(path: string){
        this.router.navigate([path]);
    }

    logout(){
        console.log("ide jön majd a kijelentkezés logikája");
        this.myService.logout();
        this.router.navigate(['login']);
    }
    
}
