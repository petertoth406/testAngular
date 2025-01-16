import { Component } from '@angular/core';

@Component({
  selector: 'app-elso-ora',
  standalone: false,
  
  templateUrl: './elso-ora.component.html',
  styleUrl: './elso-ora.component.css'
})
export class ElsoOraComponent {
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
