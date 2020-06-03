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
  longURL: string;
  home: boolean = true;


  ngOnInit(): void {
    //call API method to get long URL
    this.redirectByID();

    //sleep funtion to wait for API response
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
     //wait 2 sec for response then redirect user ro wanted page
    sleep(4000).then(() => { this.redirect(); });
    
  }

  //get longURL 
  public async redirectByID() {
    //read shortURL
    var shortURL = location.pathname.substring(1);
    var urlParams = "";
    if(shortURL.indexOf('/') !== -1) {
      urlParams = shortURL.substring(shortURL.indexOf('/'));
      shortURL = shortURL.substring(0, shortURL.indexOf('/'));
    }
    //call API
    (await this._ApiService.getByShortURLHTTP(shortURL))
      .subscribe
      (
        //write received data in temp save
        values => {
          this.longURL = values.data.longURL + urlParams;
          this.home = false;
        }        
      );
      return this.longURL;  
  }
 
  //redirect to url
  public redirect() {
    if(this.home) {
      this.home = false;
      //redirect Home if ShortID is not in Database 
      window.alert('verlinkung exisitert nicht!');
      window.location.href = "http://www.shortly.at";
    }
    else window.location.href = "http://" + this.longURL;
  }

}
