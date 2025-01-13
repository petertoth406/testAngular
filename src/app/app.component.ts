import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my';
  inputValue = 'asd';
  fromChild = '';

  a!: number;
  b!: number;
  result!: number;

  getValue(value: string){
    this.fromChild = value;
  }
  sum(){
    this.result = +(this.a ?? 0) + +(this.b ?? 0) as number;
  }
}
