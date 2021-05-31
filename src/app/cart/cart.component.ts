import { fakeObject } from './../shared/fakeObjects';
import { ShoppingCartService } from './../services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../shared/Prodotto';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products : Map<Prodotto, number>;
  subtotal : number;
  productsCount : number;

  //Ad ogni caricamento della pagina va ad aggiungere all'array products i prodotti effettivamente all'interno della classe ShoppingCart
  constructor(private cartService : ShoppingCartService) {
    //this.cartService.getCartInstance().addToCart(Math.random());
    this.products = this.cartService.getCartInstance().getProducts();
    this.productsCount = this.products.size;

    console.log(this.products); //debug

    this.subtotal = this.calcSubtotal();
  }

  //Inizializza oggetto carrello e suoi prodotti
  ngOnInit(): void {}

  deleteProduct(product : Prodotto) {

    this.cartService.getCartInstance().removeFromCart(product);
    this.productsCount = this.products.size;  //Perchè c'è il rischio che si svuoti completamente il carrello, e questa variabile deve essere aggiornata

  }

  addProduct(product: Prodotto) {  //funzione per testarlo

    this.cartService.getCartInstance().addToCart(product);

  }

  substractProduct(product: Prodotto) {

    this.cartService.getCartInstance().substractProduct(product);

  }

  //Calcola il totale, ogni volta che viene richiamata, andando a sommare i prezzi dei prodotti presenti nell'array (MAP?) products
  calcSubtotal() : number {

    return this.cartService.getCartInstance().getSubtotal();

  }

}
