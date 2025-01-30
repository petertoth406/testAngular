import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  private baseUrl = "https://jsonplaceholder.typicode.com/users";

  getUsers(){
    return this.http.get<User[]>(this.baseUrl)
  }
  getUserById(id:number){
    return this.http.get<User>(`${this.baseUrl}/${id}`)
  }
}
