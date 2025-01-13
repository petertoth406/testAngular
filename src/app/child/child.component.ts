import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() text = '';
  sendBackValue = '';
  
  @Output() sendBackEvent = new EventEmitter<string>();
  
  sendBack(){
    this.sendBackEvent.emit(this.sendBackValue)
  }
}
