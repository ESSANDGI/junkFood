import { ShoppingCart } from './../shared/ShoppingCart';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() { }

  shoppingCart : ShoppingCart = new ShoppingCart();

  //Instanziazione singola grazie al servizio
  getCartInstance() : ShoppingCart {
    return this.shoppingCart;
  }

}
