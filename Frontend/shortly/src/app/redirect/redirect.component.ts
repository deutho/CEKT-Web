import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { URL } from '../classes/url';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {
  

  constructor(private _ApiService: ApiService, private router: Router) {
  }
  
  ngOnInit(): void {
    //call API method to get long URL
    this.redirectByID();

    //sleep funtion to wait for API response
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    //wait 2 sec for response then redirect user ro wanted page
    sleep(2000).then(() => { this.redirect(); });
  }
longURL: string;
  //get longURL 
  public async redirectByID() {
    //read shortURL
    var shortURL = location.pathname.substring(1);
    //call API
    (await this._ApiService.getByShortURLHTTP(shortURL))
      .subscribe
      (
        //write received data in temp save
        values => {
          this.longURL = values.data.longURL;
        }        
      );
      
      return this.longURL;  
  }

  //redirect to url
  public redirect() {
    window.location.href = "https://" + this.longURL;
  }
}
