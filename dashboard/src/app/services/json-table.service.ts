import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable, of } from "rxjs";
import * as data from './data';
@Injectable({
    providedIn: 'root'
})

export class JsonTableService {

    constructor(private http: HttpClient) { }

    getJsonData():Observable<any> {
        return  of(data.Details);
    }
}