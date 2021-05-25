import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

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



}
