import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

import { URL } from '../classes/url';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Router } from '@angular/router';
const shortID = require('shortid');

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  
  title = 'shortly';

  constructor(private _ApiService: ApiService, private router: Router) {
  }
    
  URLPostUser: URL = new URL();
  PostMessageUser: string = "";
  

  ngOnInit() {
    
  }
  
  
  public PostURLUser() {
    var toPost = new URL();
    console.log(shortID.generate());
    console.log((<HTMLInputElement>document.getElementById("PostShortURL")).value);

    if ((<HTMLInputElement>document.getElementById("PostShortURL")).value == ""){
      toPost.shortURL = shortID.generate();
    }else{
      toPost.shortURL = (<HTMLInputElement>document.getElementById("PostShortURL")).value;
      if (toPost.shortURL == "admin"){
        window.alert("Ungültige Individualisierung, wählen Sie eine andere!");
        return;
      }

      if (toPost.shortURL.includes(".")){
        window.alert("Kein '.' in der Individualisierung erlaubt, wählen Sie eine andere Individualisierung!");
        return;
      }

    toPost.longURL = (<HTMLInputElement>document.getElementById("PostLongURL")).value;
      if (toPost.longURL == "") {
        window.alert("Der zu verkürzende Link darf nicht leer sein!")
        return;
      }
      if (toPost.longURL.search('https://') != -1) {
        toPost.longURL = toPost.longURL.substr(8); 
      }
      if (toPost.longURL.search('http://') != -1) {
        toPost.longURL = toPost.longURL.substr(7); 
      }

    this._ApiService.postURLHTTP(toPost)
    .subscribe
    (
      values =>
      {
        this.URLPostUser = values.data;
        this.URLPostUser.shortURL = "shortly.at/"+ this.URLPostUser.shortURL;
        this.PostMessageUser = values.message;
      }
    );
  }

  

  }
}