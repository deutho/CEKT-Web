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
    this.redirectByID();
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
//stefan
  //redirect to url
  public redirect(url: string) {
    window.location.href = "https://" + url;
  }
}
