import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule } from '@angular/common/http'; 
import {ApiService } from './services/api.service';

import { Routes } from '@angular/router';
import { RedirectComponent } from './redirect/redirect.component';



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
export class AppModule { 
  
}
