import { Component, OnInit } from '@angular/core';
import { LibroclickedService } from '../libroclicked.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  showCollapse: boolean;
  collapse: boolean;

  // añadimos en la cabecera el servicio
  constructor(public librosVistos: LibroclickedService) {
    // this.showCollapse = false;
    // this.collapse = false;
   }

  ngOnInit(): void {
  }

  isCollapse() {
    if(this.collapse == true) {
      this.collapse = false;
      return false;
    } else {
      this.collapse = true;
      return true;
    }
  }

}
