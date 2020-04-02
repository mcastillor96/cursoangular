import { Component, OnInit } from '@angular/core';
import { LibroclickedService } from '../libroclicked.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  // añadimos en la cabecera el servicio
  constructor(public librosVistos: LibroclickedService) { }

  ngOnInit(): void {
  }

}
