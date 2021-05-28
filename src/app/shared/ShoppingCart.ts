import { Prodotto } from './Prodotto';

export class ShoppingCart {

  private productsArray : Prodotto[];
  private subtotal : number;
  
  constructor() {
    this.productsArray = [];
    this.subtotal = 0;
  }

  //Metodo che aggiunge un prodotto al carrello
  addToCart(prodotto : Prodotto) {
    this.productsArray.push(prodotto);
    console.log("aggiunto un prodotto");
  }

  //Metodo che rimuove dall'array prodotti ciò che si vuole togliere
  removeFromCart(prodotto : Prodotto) {
    this.productsArray.splice(this.productsArray.indexOf(prodotto), 1);
  }

  //Ritorna l'array di prodotti all'interno del carrello
  getProducts() : Prodotto[] {
    return this.productsArray;
  }

  getSubtotal() : number {
    this.subtotal = 0;

    this.productsArray.forEach(product => {
      this.subtotal += product.getPrice();
    });
    return this.subtotal;
  }

}