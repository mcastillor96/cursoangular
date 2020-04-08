import { ChangeDetection } from '@angular/cli/lib/config/schema';
// Input para recibir del componente principal y Output para sacar
// EventEmmit para emitir un evento al padre
import { ChangeDetectionStrategy, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../interface/product';

@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css'],
  // se pone en el decorador
  // no lo utilizamos, solo llamamos a su politica de detencion de cambios
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatelessComponent implements OnInit {

  // declaramos e inicializamos el evento
  @Output ()  cursomatriculado: EventEmitter<Product> = new EventEmitter();
  // esto integra el stateful en el stateless
  // recibimos la interface
  @Input () product: Product;
  public matricula: string;
  private disable: boolean;

  constructor() { }

  ngOnInit(): void {
    this.matricula = 'Matricularse';
  }

  matricularse() {
    this.disable = true;
    this.matricula = '¡Matriculado!';
    // despachamos el evento, lo enviamos al componente padre
    this.cursomatriculado.emit(this.product);
  }

  isdisabled() {
    return this.disable;
  }

}
