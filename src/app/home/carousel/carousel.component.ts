import { Component, OnInit } from '@angular/core';

var immagine1 = "../assets/img_home/logoburger.png";
var immagine2 = "../assets/img_home/sulu-burger1.jpg";
var myUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  images = ['sulu-burger1.jpg', 'logoburger.png', 'myUrl'].map((n) => `../assets/img_home/${n}`);
  
}
