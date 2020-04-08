import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/product';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  isDisabled: boolean;
  showModal: boolean;
  boughtItems: Array<Product>;
  finalPrice: number;
  // class: string;
  // style: string;

  constructor() { 
    this.isDisabled = true;
    // this.class = 'modal fade';
    // this.style = 'none';
    this.showModal = false;
  }

  ngOnInit(): void {
  }

}
