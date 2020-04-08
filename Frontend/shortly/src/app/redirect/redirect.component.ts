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
  
<<<<<<< HEAD
  ngOnInit(): void {
    this.redirectByID();
=======
longURL: string = ""; //url temp save for redireting url
  


  async ngOnInit(): Promise<void> {    

    //get longurl for shorturl
    await this.redirectByID();    

    //sleep function
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    //redirect
    sleep(2000).then(() => { this.redirect(this.longURL); });    
>>>>>>> 3dc3a34871c202c91015895dce42c34fdaaa07b6
  }

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
  public redirect(url: string) {
    window.location.href = "https://" + url;
  }
}
