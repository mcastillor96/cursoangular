// Importamos el viewChild para el componente confirm
// 1º importamos el destroy 
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
// 1º importamos la interface
import { Product } from '../interface/product';
// 2º importamos el modelo
import { Shop } from '../models/shop.model';
import { ConfirmComponent } from '../confirm/confirm.component';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.css']
})
// 2º extendemos el metodo OnDestroy
export class StatefulComponent implements OnInit, OnDestroy {

  errorHttp: boolean;
  // Creamos una nueva instancia de Shop 
  // shopModel: Shop = new Shop();
  shopModel: any; // toda peticion http nos viene en json
  // implementamos un carrito
  boughtItems: Array<Product>;
  total: number;

  @ViewChild(ConfirmComponent, {static: false})
  //inicializamos como una propiedad
  confirmChild: ConfirmComponent;

  private shopSubscription: Subscription;
  

  constructor(private http: HttpClient) { 
    this.boughtItems = new Array<Product>();
    this.total = 0;

    this.shopModel = { shopItems: [] };
  }

  ngOnInit(): void {
    // tema de suscripciones siempre en el OnInit
    // dentro del OnInit hacemos la suscripción
    this.shopSubscription = this.http.get('assets/json/cursos.json').subscribe(
      (respuesta: Response) => {this.shopModel.shopItems = respuesta; },
      (respuesta: Response) => {this.errorHttp = true; },
    );

    // queremos escuchar todos los eventos
    /**
      Se puede hacer, pero no es una practica recomendable
     */
    this.onGlobalKeyboard();
  }

  //3º creamos el metodo onDestroy
  ngOnDestroy(): void {
    // nos desuscribimos para que no haya perdidas de memoria
    this.shopSubscription.unsubscribe();

    // cuando cerramos el componente lo destruimos
    document.removeEventListener('keypress', this.onGlobalKeyboard);
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

    // añadimos el metodo para que nos de el alert
    this.onConfirm();

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

  onConfirm() {
    alert('Has añadido un curso.');
  }

  // para un metodo especifico
  onKeyboard(_event) {
    console.log(_event);
    if(_event.key === 'Enter') {
      // this.onConfirm();
      alert('Has pulsado la tecla Enter.');
    } else {
      console.log('Has pulsado otra tecla que no es el Enter.');
    }
  }


  // para un metodo global
  onGlobalKeyboard() {
    document.addEventListener('keypress', (eventoGlobal) => {
      this.onKeyboard(eventoGlobal);
    });
  }

}