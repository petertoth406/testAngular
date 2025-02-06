import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment, Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private _baseUrl = 'https://jsonplaceholder.typicode.com'

  constructor(
    private http: HttpClient
  ) { }

  getPosts(){
    return this.http.get<Post[]>(this._baseUrl + "/posts")
  }

  getCommentsByPostId(postId: number){
    return this.http.get<Comment[]>(`${this._baseUrl}/comments?postId=${postId}`);
  }
}
