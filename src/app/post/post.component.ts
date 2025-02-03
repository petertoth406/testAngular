import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { Comment } from '../../models/comment';

@Component({
  selector: 'post',
  standalone: false,
  
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit{

  @Input()
  postData!: Post;
  username!: string;
  commets: Comment[] = [];

  commentsVisible: boolean = false;

  constructor(private postService: PostService){

  }

  ngOnInit(): void {
    /*this.postService.getUserById(this.postData.userId.toString()).subscribe(
      res=>{
        this.username = res.name;
      }
    )*/
  }

  toggleComments(){
    if(!this.commentsVisible && this.commets.length == 0){
      this.getComment();
    }
    this.commentsVisible = !this.commentsVisible;
  }

  getComment(){
    this.postService.getCommentByPostId(this.postData.id).subscribe(res=>{
      this.commets = res;
    });
  }
}
