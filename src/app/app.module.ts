import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { SujetsComponent } from './components/sujets/sujets.component';
import { AddEditSujComponent } from './components/sujets/add-edit-suj/add-edit-suj.component';
import { ShowSujComponent } from './components/sujets/show-suj/show-suj.component';
import { EncadrantsComponent } from './components/encadrants/encadrants.component';
import { AddEditEncComponent } from './components/encadrants/add-edit-enc/add-edit-enc.component';
import { ShowEncComponent } from './components/show-enc/show-enc.component';
import { StagiairesComponent } from './components/stagiaires/stagiaires.component';
import { AddEditStaComponent } from './components/stagiaires/add-edit-sta/add-edit-sta.component';
import { ShowStaComponent } from './components/stagiaires/show-sta/show-sta.component';
import { AddEditStgComponent } from './components/stages/add-edit-stg/add-edit-stg.component';
import { ShowStageComponent } from './components/stages/show-stage/show-stage.component';
import { StagesComponent } from './components/stages/stages.component';
import { ShowStgComponent } from './components/stages/show-stg/show-stg.component';
import { HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, SujetsComponent, AddEditSujComponent, ShowSujComponent, EncadrantsComponent, AddEditEncComponent, ShowEncComponent, StagiairesComponent, AddEditStaComponent, ShowStaComponent, AddEditStgComponent, ShowStageComponent, StagesComponent, ShowStgComponent, HomepageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
