import { Component, Input } from '@angular/core';
import { Address } from '../../models/user';

@Component({
  selector: 'address',
  standalone: false,
  
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {
  @Input()
  data!: Address
}
