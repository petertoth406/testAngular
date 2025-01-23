import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyService } from '../services/my.service';


@Component({
  selector: 'navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router,
    private myService: MyService) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  logout() {
    console.log('Logged out');
    this.navigateTo('login');
    this.myService.logout();
  }
}