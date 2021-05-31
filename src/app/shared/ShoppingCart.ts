import { Prodotto } from './Prodotto';

export class ShoppingCart {

  private productMap : Map<Prodotto, number>;
  private subtotal : number;
  
  constructor() {
    this.productMap = new Map<Prodotto, number>();
    this.subtotal = 0;
  }

  //Metodo che aggiunge un prodotto al carrello
  addToCart(prodotto : Prodotto) {

    if(this.productMap.has(prodotto)) {
      this.productMap.set(prodotto, this.getProductCount(prodotto) + 1);
      console.log("aggiunto un prodotto che già era presente");
    }
    else {
      console.log("nuovo prodotto");
      this.productMap.set(prodotto, 1);
    }
  }

  //Ritorna il numero esatto di un determinato prodotto all'interno del carrello
  getProductCount(product : Prodotto) : number {
    var cont : number;

    if(this.productMap.get(product) !== undefined) {
      cont = this.productMap.get(product) as number;  //numero 
    }
    else {  //Se è undefined
      cont = 0;
    }

    return cont;
  }


  //Metodo che rimuove dall'array prodotti ciò che si vuole togliere. Viene tolto tutto l'oggetto, indipendentemente dalla quantità
  removeFromCart(prodotto : Prodotto) {
    this.productMap.delete(prodotto);

    console.log("rimosso un prodotto");
    
    // this.productMap.splice(this.productMap.indexOf(prodotto), 1);
  }

  //Ritorna l'array di prodotti all'interno del carrello
  getProducts() : Map<Prodotto, number> {
    return this.productMap;
  }

  getSubtotal() : number {
    this.subtotal = 0;

    for (let key of this.productMap.keys()) {
      this.subtotal += key.getPrice() * this.getProductCount(key);   
    }
    
    return this.subtotal;
  }

  getArrayOfProducts() : Prodotto[] {

    var array : Prodotto[] = [];
    for (let key of this.productMap.keys()) {
      array.push(key);   
    }

    return array;
  } 
}