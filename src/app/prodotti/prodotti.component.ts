import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../prodotto';
import { PRODOTTI } from '../Mock_elencoProdotti';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.scss']
})
export class ProdottiComponent implements OnInit {

  constructor() { }
  
  myFakeData = PRODOTTI;

  ngOnInit(): void {
    
  }

}
