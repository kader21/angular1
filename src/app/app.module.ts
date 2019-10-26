import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProduitsComponent } from './produits/produits.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { MenuComponent } from './menu/menu.component';


import { Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProduitsService } from './produits.service';
import { FormsModule } from '@angular/forms'
import { AuthentificationService } from './authentification.service';
import { APP_BASE_HREF } from '@angular/common';
import { InscriptionComponent } from './inscription/inscription.component';





@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ProduitsComponent,
    ConnexionComponent,
    MenuComponent,
    InscriptionComponent
   
   
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      
  ],
    providers: [AuthentificationService, ProduitsService, [{ provide: APP_BASE_HREF, useValue: '/' }]
        ],
    bootstrap: [AppComponent]

})
export class AppModule { }
