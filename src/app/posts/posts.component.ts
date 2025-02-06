import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';
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

  filteredUsers: User[] = [];
  searchQuery: string = 'Béla';

  constructor(private postService: PostService){

  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      posts=>{
        this.posts = posts;

        this.postService.getUsers().subscribe(
          users=>{

            //let numbers = [1, 2, 3];
            this.users = users;
            //this.filteredUsers = users;

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

  onSearch(){
    console.log(this.searchQuery)
    if(this.searchQuery){
      this.filteredUsers = this.users.filter(user=>{
        return user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      })
    }else{
      this.filteredUsers = []
    }
  }
  
  selectUser(user: User){

    this.searchQuery = '';
    this.filteredUsers = [];

    this.postService.getPostsByUserId(user.id).subscribe(res=>{
      this.posts = res.map(post =>{
        const user = this.users.find(user => user.id == post.userId);
        post.username = user?.name ?? "Unknown";
        return post;
      });;
    })
  }

}
