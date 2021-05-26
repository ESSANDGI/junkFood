import { Component, OnInit } from '@angular/core';

export class ShoppingCart {

  private productsArray : number[];
  
  constructor(products : number[]) {
    this.productsArray = products;
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

}


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor() { 
    this.cont += 1;
    this.shoppingCart.addToCart(this.cont)
    console.log(this.shoppingCart.getProducts());
    console.log("entrato nel costruttore di CartComponent");
  }

  //Inizializza oggetto carrello e suoi prodotti
  ngOnInit(): void {
    console.log("NG ON INIT")
  }

  shoppingCart = new ShoppingCart([]);
  products : number[] = this.shoppingCart.getProducts();
  cont = 0;



}
