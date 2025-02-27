import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'https://dummyjson.com/user';
  constructor(
    private http: HttpClient
  ) { }

  login(userData: {username: string, password: string}){
    return this.http.post<any>(`${this.baseUrl}/login`, userData);
  }

  setToken(token: string){
    localStorage.setItem("token", token);
  }

  isLoggedIn() :boolean{
    return !!localStorage.getItem('token'); //undefined || null => !undefined = true || !null = true
    //return localStorage.getItem('token') ? true : false;
  }
  logout(){
    localStorage.removeItem("token");
  }
}

