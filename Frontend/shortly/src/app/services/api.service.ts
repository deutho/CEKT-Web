import {Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService
{
    
    constructor(private httpclient: HttpClient) {}

    getURLs(): Observable<any> {
        return this.httpclient.get("http://192.168.1.10:3000/URL");
    }


    


}