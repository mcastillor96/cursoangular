import { Component, OnInit } from '@angular/core';
// importamos para sacar los parámetros de la url
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  libros: Array<object>;
  libroId: number;
  libroClick: any; // este se puede declarar como any porque no sabemos qué tipo es, ya que viene de la vista

  // lo hacemos de forma privada para que no ande purulando por la aplicacion
  // rutausuario: ActivatedRoute con esto conocemos la ruta del usuario
  constructor(private rutausuario: ActivatedRoute) { 
    /**
      Esta no sería la forma más adecuada, mejor con servicios
     */
    this.libros = [
      {id:'1', titulo: 'Te veré bajo el hielo', autor:'Robert Bryndza', imagen: 'assets/bajo-hielo.jpg'},
      {id:'2', titulo: 'Dime quién soy', autor:'Julia Navarro', imagen: 'assets/quien-soy.jpg'},
      {id:'3', titulo: 'El día que se perdió la cordura', autor:'Javier Castillo', imagen: 'assets/cordura.jpg'}
    ];
  }

  ngOnInit(): void {
    // subscribe es un metodo asincrono y un observable
    // usamos las arrowFunctions
    this.rutausuario.params.subscribe(params => {
      // aqui params es un array asociativo
      this.libroId = params['libroId']; //1
      this.libroClick = this.libroBuscador();
    });
  }

  filtroId(libro) {
    return libro.id === this;
  }

  libroBuscador() {
    return this.libros.filter(this.filtroId, this.libroId)[0];
  }

}
