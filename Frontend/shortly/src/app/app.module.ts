import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule } from '@angular/common/http'; 
import {ApiService } from './services/api.service';
<<<<<<< HEAD
import { Routes } from '@angular/router';

=======
import { RedirectComponent } from './redirect/redirect.component';
>>>>>>> 0e6c141a86f4a75a2c4e3039c328db00e3370b77

@NgModule({
  declarations: [
    AppComponent,
    RedirectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule


  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
