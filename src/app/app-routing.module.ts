import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
  // creiamo un oggetto di rotta
  path: 'homepage',
  component: HomeComponent
  },
  {
  //creo rotta per chi-siamo 
  path: 'chi-siamo',
  component: ChiSiamoComponent
  },
  {
  //creo rotta per prodotti
  path: 'prodotti',
  component: ProdottiComponent
  },
  {
    //creo rotta per carrello, ATTENZIONE: E' temporanea, in attesa che ci illumini su come fare bene la sidenav.
    path: 'shopping-cart',
    component: CartComponent
  },
  {
    path: '', //Redirect all'homepage in caso di path vuoto
    redirectTo: '/homepage',
    pathMatch: 'full' //perchè mettere questo? io voglio che il redirect 
                      //all'home page ci sia solo se il path è veramente vuoto
  },
  // questo è il path di wildcard o Wildcard route
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
