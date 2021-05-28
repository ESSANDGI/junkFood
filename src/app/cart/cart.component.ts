import { ShoppingCartService } from './../services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  //Ad ogni caricamento della pagina va ad aggiungere all'array products i prodotti effettivamente all'interno della classe ShoppingCart
  constructor(private cartService : ShoppingCartService) {
    this.cartService.getCartInstance().addToCart(Math.random());
    this.products = this.cartService.getCartInstance().getProducts();
    console.log(this.products); //debug

    this.subtotal = this.cartService.getCartInstance().getSubtotal();
  }

  //Inizializza oggetto carrello e suoi prodotti
  ngOnInit(): void {}

  products : number[];

  subtotal : number;

  deleteProduct(product : number) {

    this.cartService.getCartInstance().removeFromCart(product);

  }

  addProduct() {

    this.cartService.getCartInstance().addToCart(Math.random());

  }

  //Calcola il totale, ogni volta che viene richiamata, andando a sommare i prezzi dei prodotti presenti nell'array (MAP?) products
  // calcSubtotal() : number {

  //   return this.products

  // }

}
