import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SujetsComponent } from './components/sujets/sujets.component';
import { EncadrantsComponent } from './components/encadrants/encadrants.component';
import { StagiairesComponent } from './components/stagiaires/stagiaires.component';
import { StagesComponent } from './components/stages/stages.component';
//import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'home', component: HomepageComponent },
  {
    //redirect to 'login'
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  { path: 'sujet', component: SujetsComponent },
  { path: 'encad', component: EncadrantsComponent },
  { path: 'stagia', component: StagiairesComponent },
  { path: 'stg', component: StagesComponent },

  /*   {
    // wildcard route for a 404 page
    path: '**',
    component: PageNotFoundComponent,
  }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
