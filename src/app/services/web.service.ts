import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/observable'

@Injectable ()
export class WebService {

    //headers:any;
    //options:any;

    constructor(private http: HttpClient){
        
    }

    public getFromServer(url:string): Observable<any> {
        return this.http.get(url);
    }
}