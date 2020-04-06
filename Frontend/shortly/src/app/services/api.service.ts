import {Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

var apiurl = 'http://192.168.1.10:3000/';


@Injectable()
export class ApiService
{
    
    constructor(private httpclient: HttpClient) {}

    getAll(): Observable<any> {
        return this.httpclient.get(apiurl+'URL');
    }


    getByShortURL(): Observable<any> {
        let params1 = document.getElementById('sURL');
        return this.httpclient.get(apiurl+params1);
    }
}