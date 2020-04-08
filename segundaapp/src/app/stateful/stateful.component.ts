// Importamos el viewChild para el componente confirm
import { Component, OnInit, ViewChild } from '@angular/core';
// 1º importamos la interface
import { Product } from '../interface/product';
// 2º importamos el modelo
import { Shop } from '../models/shop.model';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.css']
})
export class StatefulComponent implements OnInit {

  @ViewChild(ConfirmComponent, {static: false})
  //inicializamos como una propiedad
  confirmChild: ConfirmComponent;

  // Creamos una nueva instancia de Shop 
  shopModel: Shop = new Shop();
  // implementamos un carrito
  boughtItems: Array<Product>;
  total: number;
  

  constructor() { 
    this.boughtItems = new Array<Product>();
    this.total = 0;
  }

  ngOnInit(): void {
  }

  clickItem(_curso) {
    // console.log(_curso.price);
    // esta solucion si vienen más operaciones se puede quedar un poco simple
    this.total = this.total + _curso.price; 
    // console.log(this.total);
    this.boughtItems.push(_curso);
    console.log(_curso);
  }

  // metodo donde llega el evento
  cursoMatriculado(_event: Product) {
    // llamamos al metodo del carrito y le pasamos el producto (event)
    this.clickItem(_event);

    // en el momento que se produce una matricula, confirmamdos
    this.confirmChild.isDisabled = false;
    this.confirmChild.finalPrice = this.finalPrice();
    this.confirmChild.boughtItems = this.boughtItems;
    // this.confirmChild.class = 'modal fade show';
    // this.confirmChild.style = 'block';
  }

  // otra opcion para el precio final
  finalPrice() {
    if(this.boughtItems) {
      // el reduce asigna al acumular el valor actual
      // el 0 es el valor inicial
      return this.boughtItems.reduce(
        (prev: number, item: Product) => prev + item.price, 0
      );
    }
  }

}
