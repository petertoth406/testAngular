import { Component } from '@angular/core';
import { MyService } from '../services/my.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private auth: AuthService){

  }

  isLoggedIn(){
    return this.auth.isLoggedIn();
  }
}
