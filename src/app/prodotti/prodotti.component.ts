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
  
  Mock_ElencoPanini = this.Mock_ElencoProdotti.filter(e => {
     return e.getTipo() === "panino";
  })

  Mock_ElencoBibite = this.Mock_ElencoProdotti.filter(e => {
    return e.getTipo() === "bibita";
  })

  Mock_ElencoInsalate = this.Mock_ElencoProdotti.filter(e => {
    return e.getTipo() === "insalata";
  })

  Mock_ElencoSalse = this.Mock_ElencoProdotti.filter(e => {
    return e.getTipo() === "salsa";
  })

  Mock_ElencoSifiozita = this.Mock_ElencoProdotti.filter(e => {
    return e.getTipo() === "sfiziosita";
  })

  ngOnInit(): void {
  }

}
