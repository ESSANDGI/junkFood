import { Prodotto } from './Prodotto';

export class ShoppingCart {

  private productMap : Map<Prodotto, number>;
  private subtotal : number;
  
  constructor() {
    this.productMap = new Map<Prodotto, number>();
    this.subtotal = 0;
  }

  //  =  <prodotto1, 2>, <prodotto2, 1>, <prodotto3, 6>, <prodotto4, 4>, <prodotto5, 1>

  //Metodo che aggiunge un prodotto al carrello
  addToCart(product : Prodotto) {

    if(this.productMap.has(product)) {
      this.productMap.set(product, this.getProductCount(product) + 1);
      console.log("aggiunto un prodotto che già era presente");
    }
    else {
      console.log("nuovo prodotto");
      this.productMap.set(product, 1);
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
  removeFromCart(product : Prodotto) {
    this.productMap.delete(product);
    console.log("rimosso un prodotto");
    // this.productMap.splice(this.productMap.indexOf(prodotto), 1);
  }

  //Sottrae un solo tipo di prodotto, 
  substractProduct(product: Prodotto) {
    var count = this.getProductCount(product);

    if(count > 1) {
      this.productMap.set(product, this.getProductCount(product) - 1);
    }
    else if(count === 1){
      this.removeFromCart(product);
    }
    else {   //Se il prodotto non esiste, anche se in realtà non dovrebbe mai essere possibile un acosa del genere
      console.log("Elemento undefined, prodotto inesistente");
    }
  }

  //Nuovo funzione minus

  //Ritorna la mappa stessa di prodotti all'interno del carrello
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

  //Ritorna array di prodotti
  getArrayOfProducts() : Prodotto[] {

    var array : Prodotto[] = [];
    for (let key of this.productMap.keys()) {
      array.push(key);   
    }

    return array;
  } 
}