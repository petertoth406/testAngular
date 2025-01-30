import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  private _isLoggedIn: boolean = true;

  constructor(
    private http: HttpClient
  ) { }

  isLoggedIn(){
    return this._isLoggedIn;
  }
  login(){
    this._isLoggedIn = true;
  }
  logout(){
    this._isLoggedIn = false;
  }

  myFirstGet(){
    return this.http.get<any>("https://jsonplaceholder.typicode.com/users")
  }

  
}
