import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  productIntoCart : number;

  constructor(private cartService : ShoppingCartService) {

    this.productIntoCart = this.cartService.getCartInstance().getProducts().length;
    console.log(this.productIntoCart);

  }

  ngOnInit(): void {
  }

  changeToBlood() {
    let image = document.getElementById("logo") as HTMLImageElement;
    image.src = "../../assets/menu-img/logo-bianco-e-nero-sangue.png";
    // img.src = "../../assets/menu-img/logo-bianco-e-nero-sangue.png";
  }

  changeToNormal() {
    let image = document.getElementById("logo") as HTMLImageElement;
    image.src = "../../assets/menu-img/logo-bianco-e-nero.png";
    // img.src = "../../assets/menu-img/logo-bianco-e-nero-sangue.png";
  }



  // showSideNav() {

  // }

  /*//Nel momento in cui l'utente aggiunge al carrello un prodotto richiama questa funzione la quale visualizza il badge sull'icona carrello
    toggleCartBadge() {



    }
  
  */



}
