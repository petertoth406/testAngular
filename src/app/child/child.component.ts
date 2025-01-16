import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'child',
  standalone: false,
  
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() fromApp: string = "htnonhoienhpoi";
  @Input() name!: string;

  @Output() sendBackEvent = new EventEmitter<string>();
  
  toApp!: string;

  sendBack(){
    this.sendBackEvent.emit(this.toApp)
  }


  constructor(){
    //this.fromApp = 5;
    //this.fromApp = {name : "Peti"}
  }

}
