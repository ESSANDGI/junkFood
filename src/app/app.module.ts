import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './home/carousel/carousel.component';
import { PrimoSloganComponent } from './home/primo-slogan/primo-slogan.component';
import { RigaDivisaIn2Component } from './home/riga-divisa-in2/riga-divisa-in2.component';


import { FacebookShareComponent } from './footer/facebook-share/facebook-share.component';
import { TwitterShareComponent } from './footer/twitter-share/twitter-share.component';
import { InstagramShareComponent } from './footer/instagram-share/instagram-share.component';
import { SideNavComponent } from './side-nav/side-nav.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ProdottiComponent } from './prodotti/prodotti.component';


 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavBarComponent,
    FooterComponent,
    CarouselComponent,
    PrimoSloganComponent,
    RigaDivisaIn2Component,
    FacebookShareComponent,
    TwitterShareComponent,
    InstagramShareComponent,
    ChiSiamoComponent,
    SideNavComponent,
    ProdottiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
