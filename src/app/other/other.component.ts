import { Component } from '@angular/core';

@Component({
  selector: 'app-other',
  standalone: false,
  
  templateUrl: './other.component.html',
  styleUrl: './other.component.css'
})
export class OtherComponent {
  myName: string = "Béla";
  fromChild!: string;
  color: string = "red";

  getValue(text: string){
    this.fromChild = text;
  }

  changeColor(){
    if(this.color == "red"){
      this.color = "blue";
    }else{
      this.color = "red";
    }
  }
}
