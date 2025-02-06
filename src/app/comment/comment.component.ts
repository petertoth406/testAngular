import { Component, Input } from '@angular/core';
import { Comment } from '../../models/post';

@Component({
  selector: 'comment',
  standalone: false,
  
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  @Input()
  comment!: Comment;
}
