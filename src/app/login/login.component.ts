import { Component } from '@angular/core';
import { MyService } from '../my.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private myService: MyService,
              private router: Router
  ) {}

  login() {
    this.myService.login();
    console.log('Logged in');
    this.router.navigate(['home']);
  }
}
