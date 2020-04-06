import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

import { URL } from './classes/url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shortly';

  constructor(private _ApiService: ApiService) {
  }

  Allurl: Array<any> = [];
  URLByID: URL = new URL();
  URLPost: URL = new URL();
  Message: String = "";

  ngOnInit() {}

  public getAll() {
    this._ApiService.getAllHTTP()
      .subscribe
      (
        values => {
          this.Allurl = values.data;
        }

      );
  }

  public getByID() {
    this._ApiService.getByShortURLHTTP()
      .subscribe
      (
        values => {
          this.URLByID = values.data;
        }
      );
  }

  
  
  public PostURL() {
    var toPost = new URL();
    toPost.shortURL = (<HTMLInputElement>document.getElementById("PostShortURL")).value;
    toPost.longURL = (<HTMLInputElement>document.getElementById("PostLongURL")).value;


    this._ApiService.postURLHTTP(toPost)
    .subscribe
    (
      values =>
      {
        this.URLPost = values.data;
      }
    );

  }

  public DeleteURL() {

    var shortURL = (<HTMLInputElement>document.getElementById("ShortURLDelete")).value;

    this._ApiService.deleteURLHTTP(shortURL).subscribe();
  }

}
