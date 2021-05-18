import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
  // creiamo un oggetto di rotta
  path: 'homepage',
  component: HomeComponent
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
