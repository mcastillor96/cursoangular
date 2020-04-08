import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-rendererdemo',
  templateUrl: './rendererdemo.component.html',
  styleUrls: ['./rendererdemo.component.css']
})
export class RendererdemoComponent implements OnInit {

  users: Array<object>;
  // tipo elemento HTML del DOM
  clearElement: HTMLElement;
  clearSpan: HTMLElement;
  clearButton: HTMLElement;

  constructor(private ren:Renderer2) { 
    this.users = [
      { nombre: 'David', id: 1 },
      { nombre: 'Miguel', id: 2 },
      { nombre: 'Javier', id: 3 },
    ];
  }

  ngOnInit(): void {
  }

  // aqui si sería bueno especificar el tipo
  activeMethod(element: HTMLElement) {
    console.log(element);
    console.log(this.clearElement);
    if(this.clearElement) {
      this.ren.removeClass(this.clearElement, 'miclase');
      if(this.clearElement.getElementsByTagName('span')[0]) this.ren.removeChild(this.clearElement, this.clearElement.getElementsByTagName('span')[0]);
      if(this.clearElement.getElementsByTagName('button')[0]) this.ren.removeChild(this.clearElement, this.clearElement.getElementsByTagName('button')[0]);
    }
    this.ren.addClass(element, 'miclase');
    this.ren.setAttribute(element, 'data-select', 'true');
      
    let nuevoElemento = this.ren.createElement("span");
    this.ren.setProperty(nuevoElemento, "innerHTML", " :)");
    // if(element.getElementsByTagName('span')[0]) {
    //   console.log('tiene span');
    //   this.ren.removeChild(element, element.getElementsByTagName('span')[0]);
    // } else {
    //   console.log('no tiene span');
    // }
    this.ren.appendChild(element, nuevoElemento);

    let nuevoBoton = this.ren.createElement("button");
    this.ren.setProperty(nuevoBoton, "innerHTML", "Ver más");
    this.ren.listen(nuevoBoton, 'click', (event) => { this.handleClick(element);});
    // if(element.getElementsByTagName('button')[0]) {
    //   console.log('tiene button');
    //   this.ren.removeChild(element, element.getElementsByTagName('button')[0]);
    // } else {
    //   console.log('no tiene button');
    // }
    this.ren.appendChild(element, nuevoBoton);

    this.clearElement = element;
  }

  handleClick(element) {
    alert(element.textContent);
  }

}
