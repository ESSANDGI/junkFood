import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.scss']
})
export class ProdottiComponent implements OnInit {

  constructor() { }
  
  
  ngOnInit(): void {
    const pathForImages : string = "../../assets/prodotti/";
    const imagesNameDirectory  = ["bibite/","insalate/","panini/","salse/","sfiziosita/"];
    
  }

}
