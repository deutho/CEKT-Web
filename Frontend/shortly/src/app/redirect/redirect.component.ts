import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { URL } from '../classes/url';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor(private _ApiService: ApiService, private router: Router) {
  }
  
  ngOnInit(): void {
    this.redirectByID();
  }

  public redirectByID() {
    var shortURL = "yt";
    var longURL = "";
    var GetURL = new URL();
    this._ApiService.getByShortURLHTTP(shortURL)
      .subscribe
      (
        values => {
          if (values.data !== undefined) {
         GetURL = values.data;
        longURL = GetURL.longURL;}
        else longURL = "http://www.google.com";
        }
      );
      window.location.href = longURL;
  }
}
