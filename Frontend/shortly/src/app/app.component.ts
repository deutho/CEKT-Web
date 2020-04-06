import { Component } from '@angular/core';
import {ApiService} from './services/api.service';

import {URL} from './classes/url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shortly';

  constructor(private _ApiService: ApiService) {
  }

  url: Array <any> = [];

  ngOnInit() {
    this._ApiService.getAll()
    .subscribe
    (
      values =>
      {
        this.url = values.data;
      }
      
    );

    this._ApiService.getByShortURL()
    .subscribe
    (
      values =>
      {
        this.url = values.data
      }
    );
  }

}
