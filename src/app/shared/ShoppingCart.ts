
export class ShoppingCart {

  private productsArray : number[];
  private subtotal : number;
  
  constructor(products : number[]) {
    this.productsArray = products;
    this.subtotal = 0;
  }

  //Metodo che aggiunge un prodotto al carrello
  addToCart(prodotto : number) {
    this.productsArray.push(prodotto);
    console.log("aggiunto un prodotto");
  }

  //Metodo che rimuove dall'array prodotti ciò che si vuole togliere
  removeFromCart(prodotto : number) {
    this.productsArray.splice(this.productsArray.indexOf(prodotto), 1);
  }

  //Ritorna l'array di prodotti all'interno del carrello
  getProducts() : number[] {
    return this.productsArray;
  }

  getSubtotal() : number {  //DA GESTIRE TUTTO CIO

    return 100;
  }

}