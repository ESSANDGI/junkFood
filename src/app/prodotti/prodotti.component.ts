import { Component, OnInit } from '@angular/core';
import { PRODOTTI } from '../Mock_elencoProdotti';
import { CATEGORIE } from '../Mock_categorieProdotti';
import { Prodotto } from '../prodotto';

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

  stampaCategoria(categoria: string):void{
    if(categoria === "Tutti i prodotti")
      this.Mock_ElencoProdotti = PRODOTTI;
    else
      switch(categoria){
        case "Salse":{
          this.Mock_ElencoProdotti = this.Mock_ElencoSalse;
          break;
        }
        case "Bibite":{
          this.Mock_ElencoProdotti = this.Mock_ElencoBibite;
          break;
        }
        case "Insalate":{
          this.Mock_ElencoProdotti = this.Mock_ElencoInsalate;
          break;
        }
        case "Panini":{
          this.Mock_ElencoProdotti = this.Mock_ElencoPanini;
          break;
        }
        case "Sfiziosità":{
          this.Mock_ElencoProdotti = this.Mock_ElencoSifiozita;
          break;
        }
      }
  }

  changeToButton(prodotto: Prodotto) {
    let divButton = document.getElementById(prodotto.getName()) as HTMLDivElement;
    divButton.textContent = "aggiungi";
    divButton.classList.add("div-bottone")
    
    // img.src = "../../assets/menu-img/logo-bianco-e-nero-sangue.png";
  }

  changeToNormal(prodotto: Prodotto) {
    let divButton = document.getElementById(prodotto.getName()) as HTMLDivElement;
    divButton.textContent = prodotto.getName();
    divButton.classList.remove("div-bottone")

  }

  aggiungiSuCarrello(prodotto : Prodotto){
    alert("ho aggiunto a carrello!");
  }

  ngOnInit(): void {
    
  }

}
