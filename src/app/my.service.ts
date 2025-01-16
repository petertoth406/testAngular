import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  private isLoggedIn = false;
  constructor() { }

  isLogged() {
    return this.isLoggedIn;
  }
  login() {
    this.isLoggedIn = true;
  }
  logout() {
    this.isLoggedIn = false;
  }
}
