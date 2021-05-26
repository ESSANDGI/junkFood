import { Component, OnInit } from '@angular/core';
import { PRODOTTI } from '../Mock_elencoProdotti';
import { CATEGORIE } from '../Mock_categorieProdotti';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.scss']
})
export class ProdottiComponent implements OnInit {

  constructor() { }
  
  Mock_ElencoCategorie = CATEGORIE;
  Mock_ElencoProdotti = PRODOTTI;

  ngOnInit(): void {
    
  }

}
