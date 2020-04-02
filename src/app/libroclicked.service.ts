import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibroclickedService {

  libros: Array<object>;

  constructor() { 
    this.libros = [];
  }

  // no ponemos el _ porque llega de otros componentes, no de su vista
  libroVisto(libroVisto) {
    // metemos en libros el libro que llega
    this.libros.push(libroVisto);
  }

  verListado() {
    if(this.libros.length > 0) {
      return this.libros;
    } else {
      return false;
    }
  }
}
