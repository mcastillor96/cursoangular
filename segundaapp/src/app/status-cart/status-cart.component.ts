import { Component, OnInit, EventEmitter, Input, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import { Product } from '../interface/product';

@Component({
  selector: 'app-status-cart',
  templateUrl: './status-cart.component.html',
  styleUrls: ['./status-cart.component.css']
})
// Usar el DoCheck o el OnChanges, pero no los dos a la vez
export class StatusCartComponent implements OnInit, OnChanges {

  @Input() price: number;
  @Input() shopModel: Array<Product>;
  @Input() add: EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // este metodo lo que hace es escuchar
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  // ngDoCheck() {
  //   console.log('interaccion DOM');
  // }

  confirm() {
    this.add.emit();
  }

}
