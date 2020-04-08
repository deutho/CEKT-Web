import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

import { URL } from './classes/url';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Router } from '@angular/router';
const shortID = require('shortid');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shortly';

  constructor(private _ApiService: ApiService, private router: Router) {
  }
  
  

  Allurl: Array<any> = [];
  URLByID: URL = new URL();
  URLPost: URL = new URL();
  URLblank: URL = new URL();
  Changes: number = 0;
  GetAllMessage: string = "";
  GetMessage: string = "";
  PostMessage: string = "";
  DeleteMessage: string = "";
  href: string = "";

  ngOnInit() {
    this.href = this.router.url;
    console.log(this.href);
  }

  public getAll() {
    this._ApiService.getAllHTTP()
      .subscribe
      (
        values => {
          if(values.data !== undefined){
            this.Allurl = values.data;
            this.GetAllMessage = values.message;
            this.Allurl.forEach(element => {
              element.shortURL = "shortly.at/" + element.shortURL;
            });
            }
            else{
              this.GetAllMessage = "Es sind keine Links in der Datenbank enthalten!";
            }
          }
        );
  }

  public getByID() {
    this._ApiService.getByShortURLHTTP()
      .subscribe
      (
        values => {
          if(values.data !== undefined){
          this.URLByID = values.data;
          this.URLByID.shortURL = "shortly.at/"+ this.URLByID.shortURL;
          this.GetMessage = values.message;
          }
          else{
            this.URLByID.shortURL = "Link nicht vorhanden!";
            this.URLByID.longURL = "Link nicht vorhanden!";
          }
        }
      );
  }

  
  
  public PostURL() {
    var toPost = new URL();
    console.log(shortID.generate());
    console.log((<HTMLInputElement>document.getElementById("PostShortURL")).value);

    if ((<HTMLInputElement>document.getElementById("PostShortURL")).value == ""){
      toPost.shortURL = shortID.generate();
    }else{
      toPost.shortURL = (<HTMLInputElement>document.getElementById("PostShortURL")).value;
    }
    toPost.longURL = (<HTMLInputElement>document.getElementById("PostLongURL")).value;

    this._ApiService.postURLHTTP(toPost)
    .subscribe
    (
      values =>
      {
        this.URLPost = values.data;
        this.URLPost.shortURL = "shortly.at/"+ this.URLPost.shortURL;
        this.PostMessage = values.message;
      }
    );
  }

  public DeleteURL() {

    var shortURL = (<HTMLInputElement>document.getElementById("ShortURLDelete")).value;

    this._ApiService.deleteURLHTTP(shortURL)
    .subscribe
    (
      values =>
      {
        this.DeleteMessage = values.message;
        this.Changes = values.changes;         
      }
    );
   
  }

  

}
