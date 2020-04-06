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

  listURL:URL[];

  ngOnInit() {
    this._ApiService.getURLs()
    .subscribe
    (
      data =>
      {
        this.listURL = data;
      }

    );
  }

}
