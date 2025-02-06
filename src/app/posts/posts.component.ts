import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-posts',
  standalone: false,
  
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  users: User[] = [];

  constructor(
    private postService: PostService,
    private userService: UserService
  ){  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts=>{
      this.posts = posts;

      this.userService.getUsers().subscribe(users=>{
        this.users = users;

        let numbers = [1, 2, 3, 4];
        numbers = numbers.map(x=>x*2)
        let negyelOszthato = numbers.find(n => n%4==0);

        this.posts.map(post=>{
          const user = this.users.find(user=> user.id == post.userId)
          post.userName = user?.name ?? "Uknowkn";
        })

      })

    }, err=>{
      console.error(err);
      alert("Hiba történt")
    })
  }
}
