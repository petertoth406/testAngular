import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { User } from '../models/user';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient){

  }


  getPosts(){
    return this.http.get<Post[]>(this.baseUrl + '/posts')
  }

  getUserById(id: string){
    return this.http.get<User>(this.baseUrl + '/users/' + id)
  }

  getUsers(){
    return this.http.get<User[]>(this.baseUrl + '/users')
  }

  getCommentByPostId(postId: number){
    return this.http.get<Comment[]>(`${this.baseUrl}/comments?postId=${postId}`)
  }

  getPostsByUserId(userId: number){
    return this.http.get<Post[]>(`${this.baseUrl}/posts?userId=${userId}`);
  }

}
