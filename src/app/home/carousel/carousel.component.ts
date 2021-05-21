import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  images = ['sulu-burger1.jpg', 'burger.jpg', 'fuocoburger.jpg'].map((n) => `../assets/img_home/${n}`);
  
}
