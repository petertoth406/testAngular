import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyService } from '../services/my.service';

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