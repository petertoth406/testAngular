import { Component } from '@angular/core';
import { MyService } from './my.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private myService: MyService){

  }

  isLoggedIn(){
    return this.myService.isLoggedIn();
  }
}
