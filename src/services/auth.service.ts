import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = "https://dummyjson.com/user/";

  constructor(
    private http: HttpClient
  ) { }

  login(data: {username: string, password: string}){
    return this.http.post<any>(`${this.baseUrl}login`, data)
  }
  saveToken(token: string){
    localStorage.setItem('token', token)
  }
  logout(){
    localStorage.removeItem('token');
  }
  isLoggedIn(){
    return localStorage.getItem('token') != null;
  }
}
