import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { User } from '../../models/user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: false,
  
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{

  id!: string;
  user!: User;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location,
  ){
    //this.id = route.snapshot.paramMap.get("id")!;
    route.data.subscribe(data=>{
      this.user = data['user'];
      console.log(this.user);
    })
  }

  ngOnInit(): void {
    /*this.postService.getUserById(this.id).subscribe(res=>{
      this.user = res;
    }, err=>{
      console.error(err);
      this.location.back();
    })*/
  }


}
