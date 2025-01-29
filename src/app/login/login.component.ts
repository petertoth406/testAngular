import { Component, OnDestroy, SimpleChanges } from '@angular/core';
import { MyService } from '../../services/my.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnDestroy {

  constructor(private myService: MyService,
              private router: Router
  ) {}

  login() {
    this.myService.login();
    console.log('Logged in');
    this.router.navigate(['home']);
  }

  ngOnDestroy(): void {
    alert("Bezárás")
  }
}