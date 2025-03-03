import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { PostService } from './post.service';

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<User> {

  constructor(private postService: PostService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    const id = route.paramMap.get("id");
    return this.postService.getUserById(id!);
  }
}