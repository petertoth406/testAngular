import { Component, Input } from '@angular/core';

@Component({
  selector: 'other',
  standalone: false,
  
  templateUrl: './other.component.html',
  styleUrl: './other.component.css'
})
export class OtherComponent {
  @Input() text = '';

  sendBack(){
    
  }
}
