import {Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {URL } from '../classes/url';
import { ThrowStmt } from '@angular/compiler';

var apiurl = 'http://192.168.1.10:3000/url/shortly.at/';


@Injectable()
export class ApiService
{
    
    constructor(private httpclient: HttpClient) {}

    getAllHTTP(): Observable<any> {
        return this.httpclient.get(apiurl);
    }


    getByShortURLHTTP(): Observable<any> {
        var param = (<HTMLInputElement>document.getElementById("sURL")).value;
        return this.httpclient.get(apiurl+param);
    }


    postURLHTTP(toPost:URL): Observable<any> {
        return this.httpclient.post(apiurl, toPost);
    }

    deleteURLHTTP(shortURL:string): Observable<any>{
        return this.httpclient.delete(apiurl+shortURL);
    }


}