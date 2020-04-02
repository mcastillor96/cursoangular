import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LibroclickedService } from '../libroclicked.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  // libros: Array<object>;
  libros: any;
  errorHttp: boolean;
  cargando: boolean;

  constructor(private http: HttpClient, public LibroclickedService: LibroclickedService) {

  }

  ngOnInit(): void {
    this.cargando = true;
    this.cargarLista();
  }

  cargarLista() {
    // el subscribe espera a recibir el dato. Inidica asincronia
    this.http.get('assets/lista-libros.json').subscribe(
      // si la respuesta es correcta hace lo primero, si no, lo segundo. Aconsejable para manejar los errores.
      (respuesta: Response) => {this.libros = respuesta; this.cargando = false; },
      (respuesta: Response) => {this.errorHttp = true; },
    );
  }

  agregarLibro(_libroVisto) {
    this.LibroclickedService.libroVisto(_libroVisto);
  }

}
