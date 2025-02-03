import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-posts',
  standalone: false,
  
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService){

  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      posts=>{
        this.posts = posts;

        this.postService.getUsers().subscribe(
          users=>{

            //let numbers = [1, 2, 3];

            this.posts = posts.map(post =>{
              const user = users.find(user => user.id == post.userId);
              post.username = user?.name ?? "Unknown";
              return post;
            });


            /*for(let post of posts){
              for(let user of users){
                if(user.id == post.userId){
                  post.username = user.name;
                }
              }
            }*/
          }
        )


      },
      err=>{
        console.error(err);
      },
      ()=>{
        //complete: kérés teljesítése esetén fog lefutni
      }
    )
  }

  

}
