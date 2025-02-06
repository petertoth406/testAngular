import { Component, Input, OnInit } from '@angular/core';
import { Comment, Post } from '../../models/post';
import { UserService } from '../../services/user.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'post',
  standalone: false,
  
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit{

  @Input()
  postData!: Post
  //userName!: string;
  //private asd = 123;
  comments: Comment[] = [];

  commentsVisible: boolean = false;

  constructor(
    private userService: UserService,
    private postService: PostService
  ){

  }

  ngOnInit(): void {
    /*this.userService.getUserById(this.postData.userId).subscribe(res=>{
      this.userName = res.name;
    })*/
  }

  getComments(){
    this.commentsVisible = !this.commentsVisible;
    if(this.comments.length > 0){
      return;
    }  

    this.postService.getCommentsByPostId(this.postData.id).subscribe(res=>{
      this.comments = res;
    })
  }
}
