import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor(private _ApiService: ApiService, private router: Router) {
  }

  longURL: string = "";
  shortURL: string = "yt";


  ngOnInit(): void {
    console.log('redirecting....')
    this.getByID();
  }

  public getByID() {
    this._ApiService.getByShortURLHTTP(this.shortURL)
      .subscribe
      (
        values => {
          this.longURL = values.data.longURL;
        }
      );
        var path = $location.url(this.longURL);
  }
}
